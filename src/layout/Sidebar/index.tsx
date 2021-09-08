import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from '@/components/logo'
import { Link } from 'react-router-dom'
import './style'

class tfSider extends React.Component {

    render() {
        return <Layout.Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <Logo />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
                <Menu.Item key="/" icon={<UserOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    }
}

export default tfSider