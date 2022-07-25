import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {Alert, CircularProgress} from "@mui/material";
import PostPage from "../components/PostPage/PostPage";

const PostItem = () => {
    const params = useParams()
    const [post, setPost] = useState({title: "", body: "", tags:[], reactions: 0})
    const [comments, setComments] = useState([{id:0, body:"", user:{username:""}}])

    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        let postData = await PostService.getById(params.id)
        setPost(postData)
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        let commentsData = await PostService.getCommentByPost(params.id)
        setComments(commentsData.data.comments)
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])

    return (
        <div>
            {postError &&
            <Alert style={{marginTop:"20px", marginBottom: "20px"}} variant="filled" severity="error">
                {postError}
            </Alert>
            }

            {isPostLoading
            ?
            <CircularProgress/>
            :
            <PostPage setComments={setComments} comments={comments} post={post}/>
            }
        </div>
    );
};

export default PostItem;