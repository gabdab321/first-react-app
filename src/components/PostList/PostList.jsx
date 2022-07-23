import React, {useState} from 'react';
import Post from "../Post/Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({removePost, posts, title}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {posts.length === 0 ? "No posts found":title}
            </h1>

            <TransitionGroup>
                {posts.map((post, index) => {
                    return(
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post-item"
                    >
                        <Post index={index + 1} removePost={removePost} post={post}/>
                    </CSSTransition>)
                } )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;