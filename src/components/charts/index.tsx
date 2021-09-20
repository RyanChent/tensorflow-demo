import React from 'react'
import type { ChartsProps, ChartsState } from './type'
import { uuid, pick } from '@/utils/data'
import * as echarts from 'echarts'
import './style'

class Charts extends React.Component<ChartsProps, ChartsState>{
    state: ChartsState = {
        id: `default-chart-${uuid(5)}`,
        height: '400px',
        width: '50%',
        minWidth: '350px',
        minHeight: '200px',
        transition: 'all 0.5s',
        chart: null
    }

    constructor(props: ChartsProps) {
        super(props)
        this.state = Object.assign({}, this.state, props)
    }

    private defaultConfig = () => ({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    })

    componentDidMount() {
        const chart = echarts.init(document.getElementById(this.state.id) as HTMLElement)
        chart.setOption(this.state.options || this.defaultConfig())
        this.setState({
            chart
        })
    }

    render() {
        return <div
            id={this.state.id}
            style={pick(this.state, ['width', 'height', 'minWidth', 'minHeight', 'transition'])}
        />
    }
}

export default Charts