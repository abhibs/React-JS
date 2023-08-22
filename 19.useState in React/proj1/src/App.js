import React, {useState} from 'react'


function App(){
    const name = useState("Abhiram")

    return(
        <>
            <h1>{name[0]}</h1>
        </>
    )
}
export default App