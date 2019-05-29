import React, { Component } from 'react';
import RepoList from './RepoList';
import Search from './Search';

class Page extends Component {

    handleFormSubmit(username){
        this.props.handleFormSubmit(username);
    }

    render() {

        const user = this.props.userData;
        return (
            <main role="main" className="flex-shrink-0 mt-4 mb-4">
                <div className="container">
                    <div className="mb-4">
                        <Search onSubmitForm={ this.handleFormSubmit.bind(this) } />
                    </div>

                    <div className="card">
                        <h5 className="card-header">{ user.name }</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={user.avatar_url} style={{ width: '100%' }} />
                                </div>
                                <div className="col-sm-8">
                                    <span className="badge mr-2 badge-primary">{ user.public_repos } Repos</span>
                                    <span className="badge mr-2 badge-secondary">{ user.public_gists } Gists</span>
                                    <span className="badge mr-2 badge-success">{ user.following } Following</span>
                                    <span className="badge mr-2 badge-danger">{ user.followers} Followers</span>

                                    <ul className="list-group mt-3">
                                        <li className="list-group-item"><strong>Username:</strong> {user.login}</li>
                                        <li className="list-group-item"><strong>Location:</strong> {user.location}</li>
                                        <li className="list-group-item"><strong>Bio:</strong> {user.bio}</li>
                                    </ul>
                                </div>
                            </div>

                            <RepoList userRepos={ this.props.userRepos } />
                            
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}



export default Page;