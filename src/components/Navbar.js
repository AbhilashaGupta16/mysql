import React from 'react'
import {Link} from "react-router-dom";

export default function (props) {
  return (
    <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${props.mode==="light"?"light-navbar":"dark-navbar"}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MySQL IDE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/help" className="nav-link">Guide</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault" >{props.mode} mode</label>
                    </div>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
