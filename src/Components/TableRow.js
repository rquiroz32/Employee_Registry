import React from 'react';


function TableRow(props) {

    return (
     
                <tr key={props.id.value}>
                    <td><img src={props.picture.thumbnail}/></td>
                    <td>{props.name.first} {props.name.last}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob.date}</td>
                </tr>
       
    )
}

export default TableRow;