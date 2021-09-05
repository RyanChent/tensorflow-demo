import React from 'react'
import { Layout } from 'antd'
import TFHeader from './Header'
import TFSider from './Sidebar'
import './style'

const { Footer, Content } = Layout

class Index extends React.Component {
    render() {
        return <section className="tf-basic-layout">
            <Layout>
                <TFSider />
                <Layout>
                    <TFHeader />
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </section>
    }
}

export default Index