import React, {useState, useEffect} from 'react'


function App () {
    const [count, setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }

    useEffect(()=>{
        console.log('use effect called');
    }, [count])
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default App