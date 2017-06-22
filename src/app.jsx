
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHistory, useBasename } from 'history'

import routeConfig from './config/routerConfig'
import appState from './app.state'
import './app.scss';

import axiox from './config/axios'

init()

async function init() {
    await appState.initConfig()
    
    const appHistory = useRouterHistory(createHistory)({
        basename: process.env.NODE_ENV == 'development' ? '/' : '/'
    })
    
    //历史记录
    window.appHistory = appHistory
    
    //app状态
    window.appState = appState
    
    //路由
    render((
        <Router history={appHistory} routes={routeConfig}></Router>
    ), document.getElementById('content'))
}