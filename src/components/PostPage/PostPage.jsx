import React, {useState} from 'react';
import cl from "./PostPage.module.css";
import CommentSection from "./CommentSection";

const PostPage = ({post, comments, setComments}) => {
    const [newComment, setNewComment] = useState({body:"", user:{username: "anonymous user"}})
    function addComment(event) {
        event.preventDefault()

        if(newComment.body === "") return false

        setComments([...comments, {...newComment, id: Date.now()}])
        setNewComment({...newComment, body: ""})
    }

    return (
        <div className={cl.main}>
            <div className={cl.container}>
                <div className={cl.title}>{post.title}</div>
                <div className={cl.body}>{post.body}</div>
                <div className={cl.tags}>{post.tags.join(", ")}</div>
                <p className={cl.comments}>Comments</p>

                <CommentSection comments={comments} />

                <form className={cl.comment__form}>
                    <input
                        value={newComment.body}
                        onChange={(e) => setNewComment({...newComment, body: e.target.value})}
                        className={cl.comment__form__input} placeholder="write your comment!"
                    />
                    <button onClick={addComment} className={cl.comment__form__submit}>Send</button>
                </form>

                <div className={cl.likes}>Likes: {post.reactions}</div>
            </div>
        </div>
    );
};

export default PostPage;