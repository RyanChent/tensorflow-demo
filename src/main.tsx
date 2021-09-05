import React from "react";
import ReactDom from 'react-dom'
import TFRouter from "./router";
import 'antd/dist/antd.css'
import './static/styles'

const tensorflowApp = document.getElementById('tensorflow-app')

ReactDom.render(<TFRouter /> , tensorflowApp)