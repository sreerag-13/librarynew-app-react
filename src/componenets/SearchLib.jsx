import React, { useState } from 'react'
import NavLib from './NavLib'
import axios from 'axios'

const SearchLib = () => {
    const [fis, changedata] = useState(
        {


            "BookTitle":""


        }
    )
    const [result, setdata] =useState([])
    const inputhandler = (event) => {
        changedata({ ...fis, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(fis)
        axios.post("http://localhost:1001/search", fis).then((response) => {
            console.log(response.data)
            setdata(response.data)
        }
        )
    }
    const deletefn=(id)=>{

        let input={"_id":id}
        axios.post("http://localhost:1001/delete",input).then((response)=>{
          console.log(response.data)
          if (response.data.status=="success") {
            alert("delete  success")
            
          } else {
            alert("delete not success")
          }
        })
      
      
      }
    return (
        <div>
            <NavLib />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <label htmlFor="" className="form-label">book name</label>
                    <input type="text" className="form-control" name='BookTitle' value={fis.BookTitle} onChange={inputhandler}/>
                    <button className="btn btn-success" onClick={readvalue}>search</button>
                    <br />
                <br />
                <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">BookTitle</th>
                                <th scope="col">price</th>
                                <th scope="col">publishyear</th>
                                <th scope="col">author name</th>

                            </tr>
                        </thead>
                        <tbody>

                           {

                            result.map(

                                (value,index)=>{

                                return  <tr>
                                <td>{value.BookTitle}</td>
                                <td>{value.Price}</td>
                               
                                <td>{value.PublishedYear}</td>
                                <td>{value.AuthorName}</td>
                                <td><button className="btn btn-danger" onClick={()=>{deletefn(value._id)}}>Delete</button></td>

                                
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

export default SearchLib