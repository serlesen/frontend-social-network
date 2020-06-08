import React from "react";
import { request } from '../../helpers';
import './../Box/Box.css';
import {Link} from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name : props.name
        };
    }

    addFriend = (event) => {
        event.preventDefault();
        request('post',
                `/v1/users/friends/${this.state.id}`,
                {},
                (response) => {},
                (error) => {})
    };

    render() {
        return (
                <div className="box">
                    <div className="box-header">
                        <Link className="box-author" to={`/users/${this.state.id}`}>{this.state.name}</Link>
                    </div>
                    <button className="box-btn" onClick={this.addFriend}>Add as friend</button>
                </div>
        );
    }
}

export default User;