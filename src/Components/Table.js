
import React, { Component } from "react"
// import API from "../util/API";
import API from "../util/API2"
import TableRow from "./TableRow";


function Table(props) {



    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredArray === [] ? props.resArray.map(user => <TableRow {...user} />) : props.filteredArray.map(user => <TableRow {...user} />)}
                </tbody>
            </table>


        </div>

    )

}



export default Table;
