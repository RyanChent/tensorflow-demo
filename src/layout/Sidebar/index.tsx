import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Logo from '@/components/logo'
import { Link } from 'react-router-dom'

const { Sider } = Layout

class tfSider extends React.Component {
    render() {
        return <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <Logo />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
                <Menu.Item key="/home" icon={<UserOutlined />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    }
}

export default tfSider