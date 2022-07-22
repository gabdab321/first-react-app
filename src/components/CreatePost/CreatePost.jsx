import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/Input/MyInput";
import classes from "./CreatePost.module.css"

const CreatePost = ({createPost}) => {
    const [newPost, setNewPost] = useState({title: "", body: ""})

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create your post</h1>

            <form className={classes.form}>
                <MyInput
                    placeholder={"Post title"}
                    onChange={event => setNewPost({...newPost, title: event.target.value}) }
                    value={newPost.title}
                />

                <MyInput
                    placeholder={"Post body"}
                    onChange={event => setNewPost({...newPost, body: event.target.value}) }
                    value={newPost.body}
                />

                <MyButton
                    disabled={false}
                    onClick={event => {
                        event.preventDefault()

                        if(newPost.body === "" || newPost.title === "") return false

                        createPost(newPost)

                        setNewPost({title: "", body: ""})
                    }}
                >Create Post</MyButton>
            </form>

        </div>
    );
};

export default CreatePost;