/**
 * Created by yuan on 2017/7/6.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter/Counter'
import { Inc ,Dec } from '../components/Counter/CounterRedux'


const mapStateToProps = ( state ) => {
    return {
        value:state
    }
}

const mapDispatchToProps = ( dispath ) => {
    return {
        onInCrement: () => dispath( Inc() ),
        onDeCrement: () => dispath( Dec() )
    }
}

const RootApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default RootApp