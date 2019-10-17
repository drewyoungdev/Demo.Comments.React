import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';
import VoteButtons from '../VoteButtons/VoteButtons';

interface CommentProps {
    comment: CommentModel;
}

const calcPaddingLeftPx = (depth: number): number => {
    const threadWidthPx = 16;
    const threadMarginLeftPx = 5;
    const singleThreadWidthPx = threadWidthPx + threadMarginLeftPx;

    const paddingLeftFromRootThread = singleThreadWidthPx + 15;

    if (depth === 0) {
        return paddingLeftFromRootThread;
    }

    const paddingLeftFromThreadGroup = singleThreadWidthPx * depth

    return paddingLeftFromRootThread + paddingLeftFromThreadGroup;
}

const Comment: React.FC<CommentProps> = (props) => {
    return (
        <div>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.comment.depth) - 33}}>
                <VoteButtons
                    commentId={props.comment.id}
                    onUpvoteClick={console.log}
                    onDownvoteClick={console.log}
                />
            </div>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.comment.depth)}}>
                {/* TODO: Rename to VoteCommentComponent and move below div into own CommentComponent */}
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
        </div>
    );
}

export default Comment;
