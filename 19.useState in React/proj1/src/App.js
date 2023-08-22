import React, {useState} from 'react'


function App(){
    // const name = useState("Abhiram")
    // function handleClick(){
    //     name[1]("Abhi")
    // }
    // return(
    //     <>
    //         <h1>{name[0]}</h1>
    //         <button onClick={handleClick}>Change</button>
    //     </>
    // )


    // const name = useState("Abhiram")
    // const data = name[0]
    // const setName = name[1]
    // function handleClick(){
    //     setName("Abhi")
    // }
    // return(
    //     <>
    //         <h1>{data}</h1>
    //         <button onClick={handleClick}>Change</button>
    //     </>
    // )


    const [name, setName] = useState("Abhiram")
    
    function handleClick(){
        setName("Abhi")
    }
    return(
        <>
            <h1>{name}</h1>
            <button onClick={handleClick}>Change</button>
        </>
    )
}
export default App