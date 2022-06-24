import React from 'react'
// import Item from './Item'
import Data from './Data'

export default function Queries(props) {
    // const data=Data
    // const arr=data.type
    //  console.log(Data)
  return (
    <div>
        <div className="result d-flex justify-content-center m-3 row">
            <div className={`queries col-lg-11 col-11 p-0 scroll-x bg-box-${props.mode==="light"?"light":"dark"}`}> 
                <div className={`top label d-flex justify-content-center bg-grey py-1 ${props.mode==="light"?"label-light":"label-dark"}`}>
                    <strong>Query Result</strong>
                </div>
                <div className={`"bottom d-flex align-items-center h-300 m-3 text-${props.mode==="light"?"dark":"white-50"}`}> 
                    {(props.f=="select") &&
                        <table id={`${props.mode=="light"?"table-light":"table-dark"}`}>
                        <tr>
                            <th>CustomnerId</th>
                            <th>CompanyName</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>PostalCode</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                        {Data.map((item,index) => 
                            <tr>
                                <td>{item.customnerId}</td>
                                <td>{item.companyName}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.postalCode}</td>
                                <td>{item.country}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )}
                    </table>
                    }
                     {(props.f=="insert") &&
                     <div className="insert ">
                        <p>SQL &gt; Data Inserted.</p>
                     </div> 
                     }
                     {(props.f=="create") &&
                     <div className="create ">
                        <p>SQL &gt; Table Created.</p>
                     </div> 
                     }
                     {(props.f=="delete") &&
                     <div className="delete ">
                        <p>SQL &gt; Entry Deleted Successfully</p>
                     </div> 
                     }
                     {(props.f=="update" || props.f=="drop" || props.f=="alter") &&
                     <div className="update ">
                        <p>SQL &gt; Table {props.q}d.</p>
                     </div> 
                     }{
                        (props.f!="update" && props.f!="drop" && props.f!="alter" && props.f!="select" && props.f!="delete" && props.f!="create") && props.f!="insert" &&
                        <div className="update ">
                           <p>SQL &gt; No such command found.</p>
                        </div> 
                     }
                </div>
            </div>
        </div> 
    </div>
  )
}
