import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import './static/styles'

const tensorflowApp = document.getElementById('tensorflow-app')

ReactDom.render(<App /> , tensorflowApp)