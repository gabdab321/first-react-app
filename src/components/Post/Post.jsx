import React from 'react';
import "./Post.css"

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">{props.post.id}.{props.post.title}</strong>
                <div className="post__body">{props.post.body}</div>
            </div>
            <p className="post__buttons">
                <button className="delete__button">Delete</button>
            </p>
        </div>
    );
};

export default Post;