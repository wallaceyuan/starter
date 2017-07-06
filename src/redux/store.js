import { createStore, applyMiddleware ,compose } from 'redux';
import createLogger from 'redux-logger'
import loggerMiddleware from './loggerMiddleware'
import thunk from 'redux-thunk'
import { counter } from '../components/Counter/CounterRedux'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(
        createLogger(),
        thunk
    ),
    DevTools.instrument()
)
//createStore 三个参数reducer initState enhancer
let store = createStore(
    counter,
    enhancer
)// store 包含 dispatch getState replaceReducer subscribe Symbol

export default store