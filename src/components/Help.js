import React from 'react'
import create_light from "../images/create-a-table.png"
import create_dark from "../images/create-a-table-dark.png"
import insert_light from "../images/insert-light.png"
import insert_dark from "../images/insert-dark.png"
import select_light from "../images/select-light.png"
import select_dark from "../images/select-dark.png"
import delete_light from "../images/delete-light.png"
import delete_dark from "../images/delete-dark.png"

export default function Help(props) {
  return (
    <div className='text-container mt-5rem mx-5'>
      <h2 className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong>Getting Started</strong></h2>
      <h5 className='text-secondary'>This page is an overview of the MYSql IDE.</h5>
      <p className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong>MySql</strong> basically is a simple SQL Query IDE where one can input certain queries and fetch the output. Given below is a list of certain queries and their supposed output.</p>
      <br />
      <br />
      <br />
      <h5 className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong> 1. CREATE A TABLE</strong></h5>
      <p className='mx-3 text-secondary'> <strong>Syntax to Create a Table:</strong></p>
      <div className="div1 row">
        <div className="col-md-4 col-12">
          <div className="div2 d-flex flex-column"> 
          <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>CREATE TABLE table_name ( <br />
          column1 datatype, <br />
          column2 datatype, <br />
          column3 datatype, <br />
          column4 datatype, <br />
          column5 datatype, <br />
          ........  
          ); <br />
        </p></div>
        <p className='mx-3 text-secondary'><strong>Output:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>SQL &gt; Table Created.</p>
        <p className='mx-3 text-secondary'><strong>What we have created already:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>CREATE TABLE Customers (  <br />
            CustomnerId varchar(255),  <br />
            CompanyName varchar(255),  <br />
            Address varchar(255),  <br />
            City varchar(255),  <br />
            PostalCode varchar(255),  <br />
            Country varchar(255),  <br />
            Phone varchar(255)  <br />
          );  <br />
        </p>
        </div>
        <div className={`col-md-8 col-12`} >
          <img className={`border1-${props.mode==="light"?"dark":"light"}`} src={props.mode==="light"?create_light:create_dark} width="100%" height="450px" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <h5 className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong> 2. INSERT VALUES INTO TABLE</strong></h5>
      <p className='mx-3 text-secondary'> <strong>Syntax to Insert Values:</strong></p>
      <div className="div1 row">
        <div className="col-md-4 col-12">
          <div className="div2 d-flex flex-column"> 
          <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>INSERT INTO table_name ( <br />
          VALUES ( <br />
            value1, <br />
            value2, <br />
            value3, <br />
             ...); <br />
        </p></div>
        <p className='mx-3 text-secondary'><strong>Output:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>SQL &gt; Data Inserted.</p>
        <p className='mx-3 text-secondary'><strong>What we have inserted already (example 1):</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>INSERT INTO Customers VALUES(  <br />
            ALFKI,  <br />
            Alfreds Futterkiste,  <br />
            Obere Str. 57,  <br />
            Berlin,	  <br />
            12209,  <br />
            Germany,  <br />
            030-0074321  <br />
          );  <br />
        </p>
        </div>
        <div className={`col-md-8 col-12`} >
          <img className={`border1-${props.mode==="light"?"dark":"light"}`} src={props.mode==="light"?insert_light:insert_dark} width="100%" height="450px" alt="" />
        </div>
      </div>
      
      <br />
      <br />
      <br />
      <h5 className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong> 3. SELECT DATA FROM TABLE</strong></h5>
      <p className='mx-3 text-secondary'> <strong>Syntax to Select Values:</strong></p>
      <div className="div1 row">
        <div className="col-md-5 col-12">
          <div className="div2 d-flex flex-column"> 
          <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>SELECT * FROM table_name;  <br /></p></div>
        <p className='mx-3 text-secondary'><strong>Output:</strong></p>
        <div className={`scroll-x2 mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>
        <table className='' id={`${props.mode=="light"?"table-light":"table-dark"}`}>
                        <tr>
                            <th>PersonName</th>
                            <th>CompanyName</th>
                            <th>Role</th>
                            <th>City</th>
                            <th>Phone</th>
                        </tr>
                            <tr>
                                <td>Alok</td>
                                <td>SpiderWeb</td>
                                <td>App Developer</td>
                                <td>Siliguri</td>
                                <td>7001252846</td>
                            </tr>
                            <tr>
                                <td>Deep</td>
                                <td>DPS</td>
                                <td>App Developer</td>
                                <td>Siliguri</td>
                                <td>7006866845</td>
                            </tr>
                            <tr>
                                <td>Aditya</td>
                                <td>Atlan</td>
                                <td>Web Developer</td>
                                <td>Siliguri</td>
                                <td>7501245346</td>
                            </tr>
                    </table>
        </div>
        <p className='mx-3 text-secondary'><strong>Selecting data from our alreday created databse:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>SELECT * FROM Customers;  <br /></p>
        </div>
        <div className={`col-md-7 col-12`} >
          <img className={`border1-${props.mode==="light"?"dark":"light"}`} src={props.mode==="light"?select_light:select_dark} width="100%" height="320px" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <h5 className={`${props.mode==="light"?"h2-light":"h2-dark"}`}><strong> 4. DELETE DATA FROM TABLE</strong></h5>
      <p className='mx-3 text-secondary'> <strong>Syntax to Delete Values:</strong></p>
      <div className="div1 row">
        <div className="col-md-4 col-12">
          <div className="div2 d-flex flex-column"> 
          <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>DELETE FROM table_name <br /> WHERE <br /> some_column=some_value; <br /></p></div>
        <p className='mx-3 text-secondary'><strong>Output:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>SQL &gt; Entry Deleted Successfully</p>
        <p className='mx-3 text-secondary'><strong>Deleting data from our databse:</strong></p>
        <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>DELETE FROM Customers <br /> WHERE <br /> CustomnerId=ALFKI;  <br /></p>
        </div>
        <div className={`col-md-8 col-12`} >
          <img className={`mb-5 border1-${props.mode==="light"?"dark":"light"}`} src={props.mode==="light"?delete_light:delete_dark} width="100%" height="450px" alt="" />
        </div>
      </div>
      
      
      
      
    </div>
  )
}
