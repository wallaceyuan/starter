import {createStore} from 'redux';
//import * as Redux from 'redux';
//console.log(Redux)


//redux  applyMiddleware bindActionCreators combineReducers compose createStore

//reducer 纯函数
const counter = (count = 0,action) =>{
  switch (action.type){
    case 'INCREMENT':
      return count + 1
    case 'DECREMENT':
      return count - 1
    default:
      return count
  }
}

const initState = {
  name:'guo',
  city:'beijing'
}


//createStore 三个参数reducer initState enhancer
let store = createStore(counter,initState)// store 包含 dispatch getState replaceReducer subscribe Symbol

console.log(store.getState())


//手动调用dispatch
store.dispatch({type:'DECREMENT'})
