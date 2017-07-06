/**
 * Created by yuan on 2017/7/6.
 */
export function Inc() {
    return (dispatch, getState)=>{
        setTimeout(function () {
            return dispatch({ type:'INCREMENT' })
        },2000)
    }
}

export function Dec() {
    return {type:'DECREMENT'}
}

//reducer 纯函数
export function counter(count = 0,action){
    switch (action.type){
        case 'INCREMENT':
            return count + 1
        case 'DECREMENT':
            return count - 1
        default:
            return count
    }
}


