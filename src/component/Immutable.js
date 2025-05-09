import React from 'react'
import {Map, set} from 'immutable'
let book = Map({title:"Harry Potter"})
const publish = ()=>{
    // return {isPublished:true}
    return book.set("isPublishe",true)
}
book = publish(book)
console.log(book.toJS());

const Immutable = () => {
  return (
    <div>Immutable</div>
  )
}

export default Immutable