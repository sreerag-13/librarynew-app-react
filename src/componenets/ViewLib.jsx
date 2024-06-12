import React from 'react'
import NavLib from './NavLib'

const ViewLib = () => {
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewLib