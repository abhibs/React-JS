import React from 'react'


const Student = props =>{
    return(
        <>
            <h1>Hello {props.name} </h1>
            <h2>Roll Number: {props.roll}</h2>
        </>
    )
}

export default Student