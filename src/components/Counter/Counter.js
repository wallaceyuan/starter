/**
 * Created by yuan on 2017/7/6.
 */
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
    }
    render(){
        //console.log(this.props)
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

Counter.propTypes = {

}