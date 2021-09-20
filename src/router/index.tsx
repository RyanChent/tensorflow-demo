import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import Home from '../views/Home'
import TFLayout from '../layout'
import routes from './route'
import { RouteType } from '../types/route'

const tfHistory = createHashHistory({
    basename: ''
})

const flatRoutes = routes.flat(Infinity)

const tfRouter = () => <Router history={tfHistory}>
    <TFLayout>
        <Route path="/" component={Home} />
        {flatRoutes.map((route: RouteType) => <Route path={route.path} component={route.component} key={route.path} />)}
    </TFLayout>
</Router>

export default tfRouter