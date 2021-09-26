import React from "react"

function Title(props) {
  return (
    <>
      <props.tag >{props.text}</props.tag>
    </>
  )
}

export default Title