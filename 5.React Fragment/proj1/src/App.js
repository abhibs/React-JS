import React, { Component, Fragment } from 'react'

class App extends Component {
    render() {
        // return (
        //     <React.Fragment>
        //         <h1>Abhiram</h1>
        //         <p>Javalli</p>
        //     </React.Fragment>
        // );

        // return (
        //     <>
        //         <h1>Abhiram</h1>
        //         <p>Javalli</p>
        //     </>
        // );

        return (
            <Fragment>
                <h1>Abhiram</h1>
                <p>Javalli</p>
            </Fragment>
        );
    }
}

export default App
