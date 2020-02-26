import React from "react";
import { Layout, Menu, Icon } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../pages/dashboard";

const { Header, Sider, Content } = Layout;

export default () => {
    const collapsed = useSelector((state) => state.menu.collapsed);
    let toggle = useSelector((state) => state.menu.toggle);
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"
                    style={{
                        height: '55px',
                        boxShadow: '0 1px 0 0 rgba(230, 230, 230, 1)'
                    }}>
                    <img alt="logo" src={window.location.origin + '/truemoveh.png'} />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>หน้าหลัก</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>ข้อมูลสินค้า</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>จัดการระบบ</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        height: '100%',
                    }}
                >
                    <Dashboard />
          </Content>
            </Layout>
        </Layout>
    )
}