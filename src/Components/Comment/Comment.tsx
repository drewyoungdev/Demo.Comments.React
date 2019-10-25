import React, { useState } from 'react'
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';
import ReplyBox from '../ReplyBox/ReplyBox';
import TimeAgo from 'react-timeago';
import { classList } from '../../Helpers/classList';

interface CommentProps {
    comment: CommentModel;
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
                    <a className={classList({
                        "comment-row-item": true,
                        "comment-row-item-author": true,
                        // "comment-row-item-author-collapsed": props.isCollapsed,
                        })}
                    >
                        {props.comment.author}
                    </a>
                    <div className={classList({
                        "comment-row-item": true,
                        // "comment-row-item-collapsed": props.isCollapsed
                        })}
                    >
                        5k points
                    </div>
                    <div className={classList({
                        "comment-row-item": true,
                        // "comment-row-item-collapsed": props.isCollapsed
                        })}
                    >
                        ·
                    </div>
                    <div className={classList({
                        "comment-row-item": true,
                        // "comment-row-item-collapsed": props.isCollapsed
                        })}
                    >
                        <TimeAgo
                            date={props.comment.createDate}
                            live={false}
                        />
                    </div>
                </div>
                <div className={classList({
                    "comment-body": true,
                    // "hidden": props.isCollapsed
                    })}
                >
                    {props.comment.text}
                </div>
                <div className={classList({
                    "comment-row": true,
                    "comment-footer": true,
                    // "hidden": props.isCollapsed
                    })}
                >
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
                <div className={classList({
                        "comment-row": true,
                        "hidden": !showReplyBox
                        // || props.isCollapsed
                    })}
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
