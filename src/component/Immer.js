import { produce } from 'immer'
import React from 'react'


let book = {title:"Harry Porter"}

function publish(book){
   return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}
let updated = publish(book)
console.log(book);
console.log(updated);


export const Immer = () => {
  return (
    <div>immer</div>
  )
}
