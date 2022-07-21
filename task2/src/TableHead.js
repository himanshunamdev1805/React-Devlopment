import React from "react";
function TableHead({ props }) {

    return <>
        <tr>
            <th> {props}</th>
        </tr>
        <hr></hr>
    </>
}
export default TableHead;