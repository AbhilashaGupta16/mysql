import React from 'react'
import create_light from "../images/create-a-table.png"
import create_dark from "../images/create-a-table-dark.png"
import insert_light from "../images/insert-light.png"
import insert_dark from "../images/insert-dark.png"

export default function Help(props) {
  return (
    <div className='text-container m-5'>
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
          <p className={`mx-5 ${props.mode==="light"?"h2-light":"h2-dark"}`}>CREATE TABLE Persons ( <br />
            PersonID int, <br />
            LastName varchar(255), <br />
            FirstName varchar(255), <br />
            Address varchar(255), <br />
            City varchar(255) <br />
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
        <p className='mx-3 text-secondary'><strong>What we have created already:</strong></p>
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
      
      
      
      
    </div>
  )
}
