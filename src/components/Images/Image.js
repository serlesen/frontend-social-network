import * as React from "react";
import {Link} from "react-router-dom";
import "./Images.css"

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authorId: props.authorId,
            author: props.author,
            date: props.date,
            title: props.title,
            url: props.url
        }
    }

    render() {
        return (
                <div className="box">
                    <div className="box-header">
                        <Link to={`/users/${this.state.authorId}`}
                              className="box-author">{this.state.author}</Link>
                        <div className="box-date">{this.state.date}</div>
                    </div>
                    <div className="image-title">{this.state.title}</div>
                    <img className="image-content" alt={this.state.title}
                         src={`data:image/gif,base64,${this.state.url}`}/>
                </div>
        )
    }
}

export default Image;