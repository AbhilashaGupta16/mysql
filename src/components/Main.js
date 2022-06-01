import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { FaEraser } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';
// import { FaStepBackward } from 'react-icons/fa';
// import { FaStepForward } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';
// import { BsFillChatSquareDotsFill } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Queries from './Queries';

export default function Main(props) {
    // let q=[]
    const [text, setText] = useState("");
    const [command,updatCommand]=useState("")
    const [f,updateF]=useState("")
    const [queries,updateQueries]=useState([])
    // const [fruits,updatef]=useState(["apple","banana","mango"])

    const handleOnChange = (event) => {
        setText(event.target.value);
      };

    function execute(){
        const st=document.getElementById("textarea").value
        if(st!="")
            updateQueries([...queries, st]);
        // console.log(queries)
        updatCommand(st)
        const st1=st.toLowerCase() 
        updateF(st1.split(' ')[0])
        console.log(f)
    }

    const handleClearText = () => {
        setText("");
        // props.showAlert("Cleraed All Text", "success");
        toast.info("Text Cleared", {theme: props.mode});
      };
    
    const handleCopyText = () => {
        var newtext=document.getElementById("textarea").value
        navigator.clipboard.writeText(newtext).then(() => {
            
          },() => {
            // alert("no done")
          });
          alertCopy()
    };

    function alertCopy(){
        toast.info("Text Copied Successfully.", {theme: props.mode});
    }
    function copy(event){
        // const text=event.target;
        let i=event.target.id;
        console.log(i)
        let index=i.charAt(9)
        console.log(index)
        console.log(document.getElementById("copy-btn-text-"+index))
        
        navigator.clipboard.writeText(document.getElementById("copy-btn-text-"+index).innerText).then(() => {
            
        },() => {
          // alert("no done")
        });
        alertCopy()
    }
  return (
    <div>
        <div className="editor d-flex justify-content-center mx-5 mt-5rem row">
            <div className="input col-lg-7 col-11 m-3 p-1">
                <div className={`top ${props.mode==="light"?"label-light":"label-dark"} d-flex bg-grey py-1`}>
                    <div className="left w-50"><strong> Enter your query below</strong></div>
                    <div className="right w-50 d-flex justify-content-end">
                        <div className="w-10"><button disabled={text.length===0} className="btn1" title="execute" onClick={execute}><FaPlay/></button></div>
                        <div className="w-10"><button disabled={text.length===0} className="btn1" title="erase" onClick={handleClearText}><FaEraser/></button><ToastContainer position="top-center"/></div>
                        <div className="w-10"><button disabled={text.length===0} className="btn1" title="copy" onClick={handleCopyText}><FaCopy/></button><ToastContainer position="top-center"/></div>
                        {/* <div className="w-10"><button className="btn1" title="previous query"><FaStepBackward/></button></div>
                        <div className="w-10"><button className="btn1" title="next query"><FaStepForward/></button></div> */}
                    </div>
                </div>
                <div className="bottom">
                    <textarea className={`w-100 textarea box border-0 bg-box-${props.mode==="light"?"light":"dark"} ${props.mode==="light"?"color-light":"color-dark"}`} name="textarea" id="textarea" cols="100" rows="8" style={{"outline":"none","padding":"10px"}} value={text} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <div className={`previous-queries col-lg-4 col-11 m-3 p-0 bg-box-${props.mode==="light"?"light":"dark"}`}> 
                <div className={`top label d-flex justify-content-center bg-grey py-1 text-center ${props.mode==="light"?"label-light":"label-dark"}`}>
                        <strong> Previous Queries</strong>
                </div>
                <div  className={`bottom m-3 text-${props.mode==="light"?"dark":"white-50"}`}>
                {queries.length===0 && 
                    <div className="no-queries d-flex justify-content-center align-items-center">
                        <p className='d-flex justify-content-center align-items-center'>(No Previous Query Yet)</p>
                        {/* <BsFillChatSquareDotsFill/>
                        <p>Eneter some query and run it.</p> */}
                    </div> }
                {queries.length!=0 && 
                    <div className="scroll-y">
                        <ul className="ul">
                            {queries.map((item,index) => <li key={index}><p id={`copy-btn-text-${index}`}>{item}<button className={`btn ${props.mode==="light"?"color-light":"color-dark"}`} onClick={copy} value={index}><MdContentCopy id={`copy-btn-${index}`}/></button></p></li>)}
                        </ul>
                    </div>
               }                             
                </div>
            </div>               
            
        </div>
        <Queries mode={props.mode} f={f} q={command}/>
    </div>
  )
}
