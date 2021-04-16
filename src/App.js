import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import  { doIncrement, doDecrement } from './reduxToolkit'

export default function App(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  const { counter } = state;
  return(
    <>
      <div className="container">
        <h1><u>Counting App</u></h1>
        <button onClick={() => dispatch(doDecrement())}><h1>-</h1></button>
        <span className="span1">{counter}</span>
        <button onClick={() => dispatch(doIncrement())}><h1>+</h1></button>
      </div>
    </>
  )
}