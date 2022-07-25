import React from 'react';
import cl from "./PostPage.module.css";

const CommentSection = ({comments}) => {

    return (
        <div className={cl.comment__section}>
            {comments.length === 0 ?
                <h1>No comments yet</h1>
                :
                comments.map(comment =>
                    <div key={comment.id} className={cl.comment__item}>
                        <p className={cl.username}>{comment.user.username}</p>
                        <div className={cl.comment__item__body}>{comment.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default CommentSection;