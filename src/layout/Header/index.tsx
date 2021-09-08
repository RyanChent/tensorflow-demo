import React from 'react'
import { Layout, Avatar } from 'antd'
import './style'

class tfHeader extends React.Component {
    render() {
        return <Layout.Header className="tf-layout-header">
            <Avatar size={25} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>TF</Avatar>
        </Layout.Header>
    }
}

export default tfHeader