import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Jhon", body: "Aassdasd"},
        {id: 2, title: "Walter", body: "Sdasfadd"},
    ])

    return (
        <div className="App">
            <PostList posts={posts} title={"Post list"}/>
        </div>
    );
}

export default App;
