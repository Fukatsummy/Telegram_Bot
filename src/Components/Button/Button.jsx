import React from 'react'
import "./Button.css"


function Button(type, title, disable, onClick) {
  return (
    <button className={ `btn ${(type==="add" && "add")||(type==="remove" && "remove")||(type==="checkout" && "checkout")}`}>
        
    </button>
  )
}
export default Button