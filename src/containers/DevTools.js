/**
 * Created by yuan on 2017/7/6.
 */
import React, { Component } from 'react'
import { createDevTools } from 'redux-devtools'
import LogMoniotr from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


export default createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
    >
        <LogMoniotr />
    </DockMonitor>
)