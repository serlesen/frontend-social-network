import React from "react";
import {request} from '../../helpers';
import './../Box/Box.css';
import './User.css';
import User from "./User";
import {formatName} from "../Box/Box";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            searchDone: false,
            users: []
        };
    }

    onSubmitSearch = (event) => {
        event.preventDefault();
        if (this.state.term) {
            request('post',
                    `/v1/users/search?term=${this.state.term}`,
                    {},
                    (response) => {
                        this.setState({
                            users: response.data,
                            searchDone: true
                        });
                    },
                    (error) => {});
        }
    };

    onChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({term : value});
    };

    render() {
        return (
                <div>
                    <div className="box">
                        <form onSubmit={this.onSubmitSearch}>
                            <p>
                                <label htmlFor="term">First or Last Name:</label>
                                <input className="users-post" type="text" name="term" onChange={this.onChangeHandler}/>
                            </p>
                            <p>
                                <button className="box-btn" type="submit">Search</button>
                            </p>
                        </form>
                    </div>
                    {this.state.users.length > 0 && this.state.users
                            .map((user) => <User key={user.id} id={user.id} name={formatName(user)}/> )}
                    {this.state.searchDone && this.state.users.length === 0 && <div>No Users found</div>}
                </div>
        );
    }
}

export default Users;