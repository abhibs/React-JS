import React from 'react'

// const ele = <h1>Abhiram</h1>
// const ele = <h1>{20+50}</h1>

// const name = "Abhiram"

// const ele = <h1>Hello {name}</h1>


function show(name){
    return name;
}

const ele = <h1>Hello {show("Abhi")}</h1>

export default ele;
