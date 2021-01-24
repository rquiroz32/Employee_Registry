
import React, { Component } from "react"
// import API from "../util/API";
import API from "../util/API2"
import TableRow from "./TableRow";


function Table(props) {

    return (
        <div className="row">
            <table className="table ml-sm-3 mr-sm-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th onClick ={props.filteredArray.length === 0 ? () => props.sortUsers(props.resArray, props.sortFlag) : ()=> props.sortUsers(props.filteredArray, props.sortFlag) }scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredArray.length === 0 ? props.resArray.map(user => <TableRow {...user} />) : props.filteredArray.map(user => <TableRow {...user} />)}
                </tbody>
            </table>


        </div>

    )

}



export default Table;
