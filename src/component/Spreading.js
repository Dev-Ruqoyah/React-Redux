import { random } from 'lodash';
import React from 'react'
const person = {id:Math.floor(random(2000000)),name:"Bob",address:{state:"newYork",city:"Sans Francisco"}}
const updated = {...person,id:Math.floor(random(2000000)),name:"John",address:{
    state:"LA",city:"USA"
}}
console.log(updated);
console.log(person);

const detils = [person,updated]

const Spreading = () => {
  return (
    <>
        <h2>Spreading</h2>
        <div>
            {detils.map(({id,name,address:{state,city}})=>(
                <ul key={id} >
                    <li>{name}</li>
                    <li>{state}</li>
                    <li>{city}</li>
                </ul>
            ))}
        </div>
   
    </>

  )
}

export default Spreading