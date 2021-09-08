import React from 'react'
import { Layout } from 'antd'
import './style'

const tfFooter: React.FC = (props) =>
    <Layout.Footer className="tf-layout-footer">
        <p>CopyRight &copy; {new Date().getFullYear()} JarryChen. All Right Reserved</p>
        <p className="beian-info">
            <img src="https://jarrychen.cn/beian.png" alt="备案" />
            <a href="http://www.beian.miit.gov.cn" target="_blank" rel="external noopener noreferrer">
                &nbsp;粤ICP备18009401号
            </a>
        </p>
    </Layout.Footer>

export default tfFooter