import React from 'react'
import Echarts from '@/components/charts'
import './style'

export default class BasicChart extends React.Component {
    render() {
        return <section className="tf-basic-chart">
            <Echarts />
        </section>
    }
}