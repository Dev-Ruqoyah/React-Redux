import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../state/counter/counterSlice'

const Counter = () => {
    const cont = useSelector((state) => state.counter.value)
    const dispatch  = useDispatch()
    
  return (
    <>
        <p>{cont}</p>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>incrementByAmount</button>
    </>
  )
}

export default Counter