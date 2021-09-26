import React from "react"

function Input(props) {
  return (
   <div className="form-group">
        <label style={{textTransform: 'capitalize'}} htmlFor={props.name}>{props.name}{props.mandatory ? <span className="label-mandatory">*</span> : ''}</label>
        <div className="input">
            <input id={props.name} className="form-control" type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeHolder} />
        </div>
    </div>
    )
}

export default Input