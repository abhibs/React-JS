import React from 'react'

function Student(){
    function handleClick(e){
        e.preventDefault()
        console.log("Button Clicked");
    }
    return (
        <div>
            <h1>Hello Abhiram</h1>
            <a href="https://www.geekyshows.com" target="_blank" onClick={handleClick}>Click Me</a>
        </div>
    );
}
export default Student