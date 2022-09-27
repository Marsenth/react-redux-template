import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UploadOutlined
} from '@ant-design/icons';
import useAuthActions from '../redux/actions/auth';

import '../static/styles/main-layout.sass';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const { logout } = useAuthActions();
  const [collapsed, collapse] = useState(false);

  const toggle = () => {
    collapse(!collapsed);
  };

  const outlog = () => {
    localStorage.removeItem('token');
    logout();
  };

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UploadOutlined/>} onClick={outlog}>
          Cerrar Sesión
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
