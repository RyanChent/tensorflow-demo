import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import Home from '../views/Home'
import TFLayout from '../layout'

const tfHistory = createHashHistory({
    basename: ''
})

const tfRouter = () => <Router history={tfHistory}>
    <TFLayout>
        <Route exact path="/home" component={Home} />
    </TFLayout>
</Router>

export default tfRouter