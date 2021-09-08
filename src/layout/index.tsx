import React from 'react'
import { Layout } from 'antd'
import TFHeader from './Header'
import TFSider from './Sidebar'
import TFFooter from './Footer'
import './style'

class Index extends React.Component {
    render() {
        return <Layout className="tf-basic-layout">
            <TFSider />
            <Layout>
                <TFHeader />
                <Layout.Content>
                    {this.props.children}
                </Layout.Content>
                <TFFooter />
            </Layout>
        </Layout>
    }
}

export default Index