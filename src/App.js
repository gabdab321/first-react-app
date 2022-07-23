import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import MyInput from "./components/UI/Input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Jhon", body: "Aassdasd"},
        {id: 2, title: "Walter", body: "Sdasfadd"},
        {id: 3, title: "ALasd", body: "zxcasdfasdxaSC"},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    return (
        <div className="App">
            <CreatePost createPost={createPost}/>

            <PostFilter filter={filter} setFilter={setFilter} options={[
                {value: "title", textContent: "Title"},
                {value: "body", textContent: "Body"},
            ]}/>

            <PostList removePost={removePost} posts={sortAndSearchedPosts} title={"Post list"}
            />
        </div>
    );
}

export default App;
