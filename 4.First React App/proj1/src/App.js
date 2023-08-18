import React, {Component} from 'react'


// let ele = <h1>Abhiram B S</h1>

class App extends Component{
    render(){
        // return(
        //     <div>
        //         <h1>Abhiram B S</h1>
        //     </div>
        // )

        // return <h1>Abhiram B S</h1>

        return React.createElement('h1', null, 'Abhiram B S')
    }
}

export default App
