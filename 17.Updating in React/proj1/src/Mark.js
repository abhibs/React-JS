import React, { Component } from 'react'

export default class Mark extends Component {
    constructor(props){
        super(props)
        this.state = {
            mroll : this.props.roll
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.mroll}</h1>
            </div>
        )
    }
}
