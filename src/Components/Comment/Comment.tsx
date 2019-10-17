import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';

interface CommentProps {
    comment: CommentModel
}

const Comment: React.FC<CommentProps> = (props) => {
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
                    <button className="comment-row-item">
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
            </div>
        </div>
    );
}

export default Comment;
