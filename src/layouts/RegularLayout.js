import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import "./RegularLayout.css"
import {request, setAuthHeader} from "../helpers";
import PropTypes from "prop-types";

class RegularLayout extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    onLogout = e => {
        e.preventDefault();
        request('post',
                '/v1/signOut',
                {},
                (response) => {
                    setAuthHeader('');
                    this.props.history.push('/login');
                },
                (error) => {})
    };

    render() {
        return (
                <div className="regular-layout">
                    <div className="regular-layout-body">
                        <div className="regular-head">
                            <div className="regular-title">Social Network</div>
                            <div className="tabs">
                                <Link to={"/messages"} className="tab">Home</Link>
                                <Link to={"/images"} className="tab">Images</Link>
                                <Link to={"/users"} className="tab">Users</Link>
                                <div className="tab">Logout</div>
                            </div>
                        </div>
                        <div className="regular-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(RegularLayout);