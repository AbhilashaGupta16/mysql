import React from 'react'
import { MdContentCopy } from 'react-icons/md';

export default function Item(props) {
    // console.log(props.ele)
  return (
    <div>
        <div className="item d-flex">
            <p>{props.i+1} . {props.text}<button className='btn1'><MdContentCopy/></button></p>            
        </div>
    </div>
  )
}
