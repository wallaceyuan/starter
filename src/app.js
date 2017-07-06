import React,{ Component,PropTypes } from 'react'
import ReactDOM,{ render } from 'react-dom'
import Counter from './components/Counter/Counter'

import { Provider } from 'react-redux'
import store from './redux/store'
import RootApp from './containers/RootApp'
import DevTools from './containers/DevTools'
//import * as Redux from 'redux';
//console.log(Redux)

//redux  applyMiddleware bindActionCreators combineReducers compose createStore

let root = document.getElementById('app')

render(
    <Provider store={store}>
        <div>
            <DevTools />
            <RootApp />
        </div>
    </Provider>, root )

