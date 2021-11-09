import React, { Component } from 'react'


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
    }

    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <form>
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
export default Form