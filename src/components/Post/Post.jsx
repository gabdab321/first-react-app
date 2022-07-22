import React from 'react';
import "./Post.css"

const Post = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">{props.index}.{props.post.title}</strong>
                <div className="post__body">{props.post.body}</div>
            </div>
            <p className="post__buttons">
                <button
                    onClick={() => props.removePost(props.post)}
                    className="delete__button"
                >Delete</button>
            </p>
        </div>
    );
};

export default Post;