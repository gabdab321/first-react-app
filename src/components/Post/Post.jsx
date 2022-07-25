import React from 'react';
import "./Post.css"
import {useNavigate} from "react-router-dom";

const Post = (props) => {

    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">{props.post.title}</strong>
                <div className="post__body">{props.post.body}</div>
            </div>
            <p className="post__buttons">

                <button
                    onClick={() => navigate(`/posts/${props.post.id}`)}
                    className="delete__button blue"
                >Open</button>

                <button
                    onClick={() => props.removePost(props.post)}
                    className="delete__button red"
                >Delete</button>
            </p>
        </div>
    );
};

export default Post;