import React, {useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Jhon", body: "Aassdasd"},
        {id: 2, title: "Walter", body: "Sdasfadd"},
    ])

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    return (
        <div className="App">
            <CreatePost
                posts={posts}
                createPost={createPost}
            />
            <PostList
                removePost={removePost}
                posts={posts}
                title={"Post list"}
            />
        </div>
    );
}

export default App;
