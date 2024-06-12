import React, { useEffect, useState } from 'react'
import NavLib from './NavLib'
import axios from 'axios'

const ViewLib = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>
        {
            axios.get("http://localhost:1001/view").then((response)=>{
                changedata(response.data)
            }
        ).catch((error)=>{
            alert(error.message)
        }
        
        ).finally()
        }
        useEffect(()=>{fetchData()},[]) 
    
    return (
        <div>
            <NavLib/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">BookTitle</th>
                                <th scope="col">Price</th>
                                <th scope="col">Published Year</th>
                                <th scope="col">Author Name</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th scope="row">{value.BookTitle}</th>
                                    <td>{value.Price}</td>
                                    <td>{value.PublishedYear}</td>
                                    <td>{value.AuthorName}</td>
                                </tr>
                                }
                            )
                           }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewLib