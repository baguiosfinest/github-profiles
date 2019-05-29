import React, { Component } from 'react';
import Repo from './Repo';

export default class RepoList extends Component {
    render() {
        return (
            <div className="mt-5">
                <h3>User Repositories</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Link</th>
                        </tr>
                        </thead>
                        <tbody>
                            { (this.props.userRepos) ? 
                                <Repo userRepos={ this.props.userRepos } /> 
                                : <tr><td colSpan="3">Something went wrong.</td></tr> }
                            
                        </tbody>
                    </table>
            </div>
        )
    }
}
