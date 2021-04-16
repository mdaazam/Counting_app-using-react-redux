import { createStore } from 'redux';


const intialState = { counter: 0 }
const reducer = (state = intialState, action) => {
    switch(action.type){
        case "INCREMENT": return {
            counter: state.counter + action.payload
        }
        case "DECREMENT": return {
            counter: state.counter - action.payload
        }
        default: return state
    }
}
export const store = createStore(reducer)

const INCREMENT = "INCREMENT" 
export const doIncrement = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const DECREMENT = "DECREMENT"
export const doDecrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}