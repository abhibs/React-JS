import React from 'react'

function Student (){
    function handleClick(){
        console.log("Button Clicked");
    }
    return(
        <>
            <h1>Hello Abhiram</h1>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}
export default Student;
