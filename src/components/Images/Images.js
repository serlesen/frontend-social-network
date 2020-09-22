import * as React from "react";
import {request, upload} from "../../helpers";
import {formatDate, formatName} from "../Box/Box";
import Image from "./Image";
import "./Images.css"

class Images extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images : [],
            postContent: '',
            page: 0,
            hideMore: false,
            imgSrc: null
        }
        this.fileInput = React.createRef();
    }

    onPublish = e => {
        e.preventDefault();
        if (this.state.imgSrc) {
            let data = new FormData();
            data.append('file', this.fileInput.current.files[0], this.fileInput.current.files[0].name);
            data.append('title', this.state.postContent);
            upload('/v1/community/images',
                    data,
                    (response) => {
                        const image = response.data;
                        const images = [image].concat(this.state.images);
                        this.setState({images: images});
                    },
                    (error) => {})
        }
    };

    onUploadImage = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.fileInput.current.files[0]);
        reader.onloadend = function(e) {
            this.setState({
                imgSrc: [reader.result]
            })}.bind(this);
    };

    onChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({postContent: value})
    }

    componentDidMount() {
        request('get',
                `/v1/community/images?page=${this.state.page}`,
                {},
                (response) => {
                    this.state.images.push.apply(this.state.images, response.data);
                    this.setState({images: this.state.images,
                        hideMore: response.data.length === 0});
                },
                (error) => {})
    }

    loadMore = (event) => {
        this.state.page++;
        this.componentDidMount();
    }

    render() {
        return (
                <div>
                    <div className="box">
                        <textarea className="image-post"
                                  placeholder="Title of your image"
                                  onChange={this.onChangeHandler}/>
                        {this.state.imgSrc &&
                        <img className="image-content" alt="preview" src={this.state.imgSrc}/> }
                        <input className="image-input"
                            ref={this.fileInput}
                            type="file"
                            name="filename"
                            onChange={this.onUploadImage}
                            accept="image/gif, image/jpeg, image/png"/>
                        <button className="box-btn" onClick={this.onPublish}>Publish</button>
                    </div>
                    {this.state.images.length > 0 && this.state.images
                            .map((image) => <Image
                                    key={image.id}
                                    authorId={image.userDto.id}
                                    author={formatName(image.userDto)}
                                    date={formatDate(image.createdDate)}
                                    title={image.title} url={image.path}
                        />)}
                    {this.state.images.length === 0 && <div>No images for you</div>}
                    {this.state.images.length > 0 && this.state.images.length % 10 === 0
                    && <div>
                        <button className="box-btn" disabled={this.state.hideMore}
                                onClick={this.loadMore}>More</button>
                    </div>}
                </div>
        );
    }
}

export default Images;