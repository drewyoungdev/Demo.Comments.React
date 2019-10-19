import React, { useState } from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';
import ReplyBox from '../ReplyBox/ReplyBox';
import TimeAgo from 'react-timeago';

interface CommentProps {
    comment: CommentModel
    addNewComment: (newComment: CommentModel) => void;
}

const Comment: React.FC<CommentProps> = (props) => {
    const [showReplyBox, setShowReplyBox] = useState<boolean>(false);

    const addNewComment = (text: string) => {
        props.addNewComment({
            parentId: props.comment.id,
            id: Math.random().toString(36).substring(7),
            author: "current logged in user",
            text: text,
            depth: props.comment.depth + 1,
            createDate: new Date().toISOString(),
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
                        <TimeAgo
                            date={props.comment.createDate}
                            live={false}
                        />
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
