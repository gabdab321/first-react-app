import React, {useEffect, useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import {useFetching} from "./hooks/useFetching";
import {Alert, CircularProgress} from "@mui/material";
import {getPagesCount} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";

function App() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [totalPages, setTotalPages] = useState(0)
    const [requestParams, setRequestParams] = useState({limit: 10, skip: 0})
    const sortedPosts = usePosts(posts, filter.sort, filter.query)

    let pagesArray = usePagination(totalPages)

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(requestParams.limit, requestParams.skip)
        const totalCount = await response.total
        setTotalPages(getPagesCount(totalCount, requestParams.limit))
        setPosts(await response.posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [requestParams])

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><CreatePost createPost={createPost}/></MyModal>

            <PostFilter filter={filter} setFilter={setFilter} options={[
                {value: "title", textContent: "Title"},
                {value: "body", textContent: "Body"}]}
            />

            {postError &&
                <Alert style={{marginTop:"20px", marginBottom: "20px"}} variant="filled" severity="error">{postError}</Alert>
            }

            {isPostsLoading
                ?
                <CircularProgress style={{marginTop:"250px"}}/>
                :
                <PostList setRequestParams={setRequestParams} pagesArray={pagesArray} removePost={removePost} posts={sortedPosts} title={"Post list"}/>
            }
        </div>
    );
}

export default App;