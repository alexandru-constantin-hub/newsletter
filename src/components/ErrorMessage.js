import React from "react"

function ErrorMessage(props) {
  return (
    <>
    {props.type === "input" &&  <p className="error-message">Please fill in the "{props.fieldName}" field</p>}
    {props.type === "checkbox" &&  <p className="error-message">Please click the checkbox</p>}
    {props.type === "email" &&  <p className="error-message">Please check the email address</p>}
     </>
  )
}

export default ErrorMessage