import {createStore} from 'redux'

function appReducer(prevstate, action){
    return prevstate
}

const store = createStore(appReducer)

const state = store.getState()

console.log(state);