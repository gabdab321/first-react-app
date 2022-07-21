import React, {useState} from 'react';
import Post from "../Post/Post";

const PostList = ({deletePost, posts, title}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {posts.length === 0 ? "No posts found":title}
            </h1>
            {posts.map(post => <Post deletePost={deletePost} post={post} key={post.id}/> )}
        </div>
    );
};

export default PostList;