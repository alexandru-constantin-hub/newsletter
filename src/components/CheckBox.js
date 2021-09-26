import React from "react"

function CheckBox(props) {
  return (
    <div className="form-group">
        <div className="checkbox">
            <input id={props.name} type={props.type} name={props.agree}  checked={props.checked} onChange={props.onChange} />
            <label className="label-checkbox" htmlFor={props.name}>{props.labelText}</label>
        </div>
    </div>
  )
}

export default CheckBox