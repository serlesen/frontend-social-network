import * as React from "react";
import {Link} from "react-router-dom";
import './Message.css'
import '../Box/Box.css'

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: props.authorId,
            author: props.author,
            date: props.date,
            content: props.content
        }
    }

    render() {
        return(
                <div className="box">
                    <div className="box-header">
                        <Link to={`/users/${this.state.authorId}`} className="box-author">{this.state.author}</Link>
                        <div className="box-date">{this.state.date}</div>
                    </div>
                    <div className="message-content">{this.state.content}</div>
                </div>
        )
    }
}

export default Message;