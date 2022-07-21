import React from 'react'

function Categories({ props }) {

    return (

        <>
            <tr
                style={
                    props.stocked ? { color: "black" } : { color: "red" }
                }
            >
                <td>{props.name}</td>

                <td>{props.price}</td>
            </tr>
            <hr></hr>
        </>
    )
}

export default Categories
