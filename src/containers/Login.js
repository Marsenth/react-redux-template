import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Button, Modal,
} from 'antd';
import { login } from '../redux/actions/auth';
import '../static/styles/login.sass';

const Login = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.auth.LOGIN);

  const showError = ({ title = 'This is an error message', content }) => {
    Modal.error({
      title,
      ...content ? { content } : {},
    });
  };

  const onFinish = (values) => {
    dispatch(login(values));
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
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
