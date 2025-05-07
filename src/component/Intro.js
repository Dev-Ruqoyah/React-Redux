import React from 'react';
import {pipe,compose} from 'lodash/fp'
let numbers = [2,4,6]
setTimeout(()=>console.log("Hello"),5000)
const input = "     JavaScript  "
const trim = (str) => str.trim()
const wrapInDiv = str =>`<div>${str}</div>`
const wrap = type => str => `<${type}> ${str}< ${type}/>`
const toLowerCase = str => str.toLowerCase()
const result = wrapInDiv(trim(input))
// console.log(result);
// console.log(trim(input));
// console.log(wrapInDiv(toLowerCase(trim(input))));
// const transform = pipe(trim,toLowerCase,wrapInDiv)
const transform = pipe(trim,toLowerCase,wrap("div"))
console.log(transform(input));





const Intro = () => {
  return (
    <div className="app-container">
      <h1>Hello, React + Webpack! 🚀</h1>
      {/* <h4 dangerouslySetInnerHTML={result}></h4> */}
      {numbers.map((number,index) =>(
        <div key={index}>{number * 2}</div>
      ))}
      
      
    </div>
  );
};

export default Intro;
