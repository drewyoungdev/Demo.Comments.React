import React, { useState } from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';
import ReplyBox from '../ReplyBox/ReplyBox';

interface CommentProps {
    comment: CommentModel
    addNewComment: (newComment: CommentModel) => void;
}

const Comment: React.FC<CommentProps> = (props) => {
    const [showReplyBox, setShowReplyBox] = useState<boolean>(false);

    const addNewComment = (text: string) => {
        // This should be re-rendering a brand new ThreadedCommentGroup to get it's own unique ThreadHover chain
        props.addNewComment({
            id: "",
            author: "",
            text: text,
            depth: props.comment.depth + 1,
            replies: []
        });
    }

    return (
        <div>
            <div className="comment-container">
                <div className="comment-row comment-header">
                    <a className="comment-row-item author">
                        {props.comment.author}
                    </a>
                    <div className="comment-row-item">
                        5k points
                    </div>
                    <div className="comment-row-item">
                        ·
                    </div>
                    <div className="comment-row-item">
                        a few minutes ago
                    </div>
                </div>
                <div className="comment-body">
                    {props.comment.text}
                </div>
                <div className="comment-row comment-footer">
                    <button
                        className="comment-row-item"
                        onClick={() => setShowReplyBox(!showReplyBox)}>
                        <i className="comment icon" />
                        Reply
                    </button>
                    <button className="comment-row-item">
                        Share
                    </button>
                    <button className="comment-row-item">
                        Save
                    </button>
                </div>
                <div
                    className="comment-row"
                    style={{ display: showReplyBox ? "" : "none" }}
                >
                    <ReplyBox
                        onReplyClick={(replyText) => {
                            setShowReplyBox(false);
                            addNewComment(replyText);
                        }}
                        onCancelClick={() => setShowReplyBox(false)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Comment;
