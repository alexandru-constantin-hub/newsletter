import React from "react"

function Button(props) {

  return (
    <div className={props.isInForm ? "form-button" : ""}>
        <button className={`btn ${props.design}`} type={props.type} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button