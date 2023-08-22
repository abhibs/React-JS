import React, {useState} from 'react'


function App(){
    const name = useState("Abhiram")
    function handleClick(){
        name[1]("Abhi")
    }
    return(
        <>
            <h1>{name[0]}</h1>
            <button onClick={handleClick}>Change</button>
        </>
    )
}
export default App