import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/Input/MyInput";
import classes from "./CreatePost.module.css"

const CreatePost = ({addPost}) => {
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")

    function createPost() {
        return {
            id: Date.now(),
            title: postTitle,
            body: postBody
        }
    }

    function clearInputs(event) {
        event.target.querySelectorAll("input").forEach(elem => elem.value = "")
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create your post</h1>

            <form onSubmit={clearInputs} className={classes.form}>
                <MyInput placeholder={"Post title"} onChange={event => {setPostTitle(event.target.value)} }/>
                <MyInput placeholder={"Post body"} onChange={event => {setPostBody(event.target.value)} }/>
                <MyButton
                    disabled={false}
                    onClick={event => {
                        event.preventDefault()
                        addPost(createPost())
                    }}
                >Create Post</MyButton>
            </form>

        </div>
    );
};

export default CreatePost;