import React, { Component } from 'react'


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(`You Entered: ${this.state.username}`)
        this.setState({
            username: ""
        })
    }

    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                <button>Submit!</button>
                </form>
            </div>
        )
    }
}
export default Form