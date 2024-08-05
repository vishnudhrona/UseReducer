import { useReducer } from "react"

const reducer = (state, action) => {
    console.log(state,'ggggggggsssssssss');
    switch(action.type) {
        case 'INCREMENT' :
            return state + 1
        
        case 'DECREMENT' :
            return state - 1
            
        default :
            return state;    
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0)

    const increment = () => {
        dispatch({ type : 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({ type : 'DECREMENT'})
    }

    return (
        <div>
        <button onClick={increment}>inc</button>
        <h2>{count}</h2>
        <button onClick={decrement}>dec</button>
        </div>
    )
}
export default Counter