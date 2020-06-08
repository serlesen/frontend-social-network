import * as React from "react";
import {request} from "../../helpers";
import Message from "./Message";
import {formatDate, formatName} from "../Box/Box";
import './Message.css'
import '../Box/Box.css'

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            page: 0,
            hideMore: false,
            postContent: ""
        }
    }

    onPublish = e => {
        e.preventDefault();
        if (this.state.postContent) {
            request("post",
                    "/v1/community/messages",
                    {content: this.state.postContent},
                    (response) => {
                        const message = response.data;
                        const messages = [message].concat(this.state.messages);
                        this.setState({messages: messages});
                    },
                    (error) => {}
                    )
        }
    }

    onChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({postContent: value});
    }

    loadMore = (event) => {
        this.state.page++;
        this.componentDidMount();
    }

    componentDidMount() {
        request("get",
                `/v1/community/messages?page=${this.state.page}`,
                {},
                (response) => {
                    this.state.messages.push.apply(this.state.messages, response.data);
                    this.setState({messages: this.state.messages, hideMore: response.data.length === 0});
                },
                (error) => {})
    }

    render() {
        return (
                <div>
                    <div className="box">
                        <textarea className="message-post" placeholder="Write a post"
                                  onChange={this.onChangeHandler}/>
                      <button className="box-btn"
                              onClick={this.onPublish}>Publish</button>
                    </div>
                    {this.state.messages.length > 0 && this.state.messages
                            .map((message) =>
                            <Message
                                    key={message.id}
                                    authorId={message.userDto.id}
                                    author={formatName(message.userDto)}
                                    date={formatDate(message.createdDate)}
                                    content={message.content}
                        />)}
                    {this.state.messages.length > 0
                    && this.state.messages.length % 10 === 0
                    && <div>
                        <button className="box-btn" disabled={this.state.hideMore}
                                onClick={this.loadMore}>More</button>
                    </div>}
                    {this.state.messages.length === 0 && <div>No messages for you</div>}
                </div>
        );
    }

}

export default Messages;