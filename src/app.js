import {createStore} from 'redux';
import React,{ Component,PropTypes } from 'react'
import ReactDOM,{ render } from 'react-dom'
import { Provider, connect } from 'react-redux'
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

//createStore 三个参数reducer initState enhancer
let store = createStore(counter)// store 包含 dispatch getState replaceReducer subscribe Symbol

class Counter extends Component {
  constructor() {
      super()
  }
  render(){
    console.log(this.props)
    return (
        <div>
          <h1>计数器:{this.props.value}</h1>
          <button
              className="btn btn-primary"
              onClick={this.props.onInCrement}>
            点我增1
          </button>
          <button
              className="btn btn-success"
              onClick={this.props.onDeCrement}>
            点我减1
          </button>
        </div>
    )
  }
}


const mapStateToProps = ( state ) => {
    return {
        value:state
    }
}

const mapDispatchToProps = ( dispath ) => {
    return {
        onInCrement: () => dispath( {type:'INCREMENT'} ),
        onDeCrement: () => dispath( {type:'DECREMENT'} )
    }
}

const RootApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

let root = document.getElementById('app')
render(
    <Provider store={store}>
        <RootApp />
    </Provider>,root
)

