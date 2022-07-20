import React from 'react'

export default function Alert(props) {

  return (
    props.alertMessage && <div className="container my-2">
       <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertMessage.type.charAt(0).toUpperCase() + props.alertMessage.type.slice(1)}</strong> : {props.alertMessage.message}
        </div>
    </div>
  )
}
