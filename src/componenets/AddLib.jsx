import axios from 'axios'
import React, { useState } from 'react'
import NavLib from './NavLib'

const AddLib = () => {
    const[lib,changedata]=useState({

        "BookTitle":"",
        "Price":"",
        "PublishedYear":"",
        "AuthorName":""

    })
    const inputhandler=(event)=>{

        changedata({...lib,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(lib)
        axios.post("http://localhost:1001/",lib).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("add success")
                
            } else {
                alert("error")
                
            }
        })
    }
  return (
    <div>
        <NavLib/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">BookTitle</label>
                        <input type="text" className="form-control" name='BookTitle' value={lib.BookTitle} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Price</label>
                    <input type="text" className="form-control" name='Price' value={lib.Price} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Published Year</label>
                    <input type="text" className="form-control" name='PublishedYear' value={lib.PublishedYear} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Author Name</label>
                    <input type="text" className="form-control" name='AuthorName' value={lib.AuthorName} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readvalue}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddLib