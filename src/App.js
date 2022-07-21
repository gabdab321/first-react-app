import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Jhon", body: "Aassdasd"},
        {id: 2, title: "Walter", body: "Sdasfadd"},
    ])

    function addPost(newPost) {
        setPosts([...posts, newPost])
    }

    function deletePost(post) {
        setPosts(posts.filter(item => item !== post))
    }

    return (
        <div className="App">
            <CreatePost posts={posts} addPost={addPost}/>
            <PostList deletePost={deletePost} posts={posts} title={"Post list"}/>
        </div>
    );
}

export default App;
