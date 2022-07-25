import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import CreatePost from "../components/CreatePost/CreatePost";
import PostFilter from "../components/PostFilter/PostFilter";
import {Alert, CircularProgress} from "@mui/material";
import PostList from "../components/PostList/PostList";
import MyPagination from "../components/UI/pagination/MyPagination";
import {getPage, getPagesCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import {usePagination} from "../hooks/usePagination";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import "../styles/Posts.css"

const Posts = () => {

    const selectOptions = [
        {value: "title", textContent: "Title"},
        {value: "body", textContent: "Body"}
    ]
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [totalPages, setTotalPages] = useState(0)
    const [requestParams, setRequestParams] = useState({limit: 10, skip: 0})
    const sortedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = usePagination(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(requestParams.limit, requestParams.skip)
        const totalCount = await response.total
        setTotalPages(getPagesCount(totalCount, requestParams.limit))
        setPosts(await response.posts)
    })

    const createPost = (newPost) => {
        setPosts([ ...posts, {...newPost, id: Date.now()} ])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item !== post))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [requestParams])


    return (
        <div className="Posts">
            <MyButton onClick={() => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><CreatePost createPost={createPost}/></MyModal>

            <PostFilter filter={filter} setFilter={setFilter} options={selectOptions}/>

            {postError &&
            <Alert style={{marginTop:"20px", marginBottom: "20px"}} variant="filled" severity="error">
                {postError}
            </Alert>
            }

            {isPostsLoading
                ?
                <CircularProgress style={{marginTop:"250px"}}/>
                :
                <PostList removePost={removePost} posts={sortedPosts} title={"Post list"}/>
            }

            <MyPagination
                handler={pageIndex => setRequestParams({limit: 10, skip: pageIndex*requestParams.limit - 10})}
                selectedPage={getPage(requestParams.limit, requestParams.skip)}
                pagesArray={pagesArray}
            />
        </div>
    );
};

export default Posts;