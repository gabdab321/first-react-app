import React, {useState} from 'react';
import Post from "../Post/Post";
import "./PostList.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({setRequestParams, pagesArray, removePost, posts, title}) => {
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

            <div className="pages">
                {pagesArray.map(pageIndex => <p onClick={e => setRequestParams({limit: 10, skip: pageIndex*10 - 10})} className="page-item" key={pageIndex}>{pageIndex}</p>)}
            </div>
        </div>
    );
};

export default PostList;