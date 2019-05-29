import React, { Component } from 'react'

export default class Search extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         hasError: false
    //     }
    // }

    onSubmit(e) {
        e.preventDefault();
        //console.log(this.refs.username.value);
        let username = this.refs.username.value.trim();

        if(!username) {
            // this.setState({
            //     hasError: true
            // });
            console.log('Has error');
            return;
        }
        if(!this.hasError) {
            console.log("Props:", this.props);
            this.props.onSubmitForm(username);
            this.refs.username.value = '';
        }

    }

    render() {
        return (
            <form className="form-inline mt-2 mt-md-0" onSubmit={this.onSubmit.bind(this)}>
                <input className="form-control form-control-lg mr-sm-2" type="text" ref="username" placeholder="Enter Username" aria-label="Username" />
                <button className="btn btn-lg btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}
