import React, {useEffect, useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";

function App() {

    useEffect(() => {
        fetchPosts()
    }, [])

    const [posts, setPosts] = useState([])
    const [isPostsLoading, setIsPostsLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setIsPostsLoading(false)
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><CreatePost createPost={createPost}/></MyModal>

            <PostFilter filter={filter} setFilter={setFilter} options={[
                {value: "title", textContent: "Title"},
                {value: "body", textContent: "Body"}]}
            />

            {isPostsLoading
                ?
                <MyLoader style={{marginTop:"250px"}} />
                :
                <PostList removePost={removePost} posts={sortedPosts} title={"Post list"}/>
            }
        </div>
    );
}

export default App;
