import React, {useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import MyInput from "./components/UI/Input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchedPosts, useSortedPosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Jhon", body: "Aassdasd"},
        {id: 2, title: "Walter", body: "Sdasfadd"},
        {id: 3, title: "ALasd", body: "zxcasdfasdxaSC"},
    ])

    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPosts = useSortedAndSearchedPosts(useSortedPosts(posts, filter.sort), filter.query)

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><CreatePost createPost={createPost}/></MyModal>

            <PostFilter filter={filter} setFilter={setFilter} options={[
                {value: "title", textContent: "Title"},
                {value: "body", textContent: "Body"},
            ]}/>

            <PostList removePost={removePost} posts={sortedPosts} title={"Post list"}
            />
        </div>
    );
}

export default App;
