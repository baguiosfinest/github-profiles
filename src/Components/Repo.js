import React, { Component } from 'react'

export default class Repo extends Component {

    render() {

        const repos = this.props.userRepos;

        return (
            
            repos.map((repo, index) => {
                return (<tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{repo.name}</td>
                    <td><a href={repo.url}>{repo.url}</a></td>
                </tr>)
            })
   
        )
    }
}
