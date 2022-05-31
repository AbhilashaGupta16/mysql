import React from 'react'

export default function Alert(props) {
  return (
    <div>
        {props.alert && 
        <div class="alert alert-dark d-flex justify-content-center" role="alert">
        {props.alert.msg}
        </div>}
    </div>
    
  )
}
