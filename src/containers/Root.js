/**
 * Created by yuan on 2017/7/7.
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}

