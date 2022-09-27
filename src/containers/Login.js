import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Form, Input, Button, Modal
} from 'antd';
import '../static/styles/login.sass';
import useAuthActions from '../redux/actions/auth';

const Login = () => {
  const { login } = useAuthActions();
  const { auth: { LOGIN: { data, loading, error } } } = useSelector((state) => state);

  const showError = ({ title = 'This is an error message', content }) => {
    Modal.error({
      title,
      ...content ? { content } : {}
    });
  };

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    showError({ content: errorInfo.errorFields[0].errors[0] });
  };

  useEffect(() => {
    if (!loading) {
      if (error) {
        showError({ title: error.name, content: error.message });
      }
    }
  }, [data, error]);

  return (
    <div className="login">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input data-testid="login_username_input"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password data-testid="login_password_input"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
