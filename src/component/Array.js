import React from 'react'
import RenderingArray from './RenderingArray';
const numbers = [1,4,5,7]
// Adding to the Array
const added = [...numbers,9]  
console.log(added);
const fAdded = [9,...numbers]
// console.log(fAdded);

const index = numbers.indexOf(5)
const pAdded = [...numbers.slice(0,index),
    9,
    ...numbers.slice(index)]
// console.log(pAdded);

// Removing from Array
const removed = numbers.filter(num => num !== 4)
// console.log(removed);

// Updating
const updated = numbers.map(num => num === 4 ? 1 : num)


const Array = () => {
  return (
    <>
    <h2>Adding</h2>
    <RenderingArray arr={numbers}/>
    <RenderingArray arr={added}/>
    <RenderingArray arr={fAdded}/>
    <RenderingArray arr={pAdded}/>
    <h2>Removing</h2>
    <RenderingArray arr={removed}/>
    <h2>Updating</h2>
    <RenderingArray arr={updated}/>
    
    </>
  )
}

export default Array