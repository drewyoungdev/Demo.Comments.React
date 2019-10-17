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
                <div className="comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
                </div>
            </div>
        </div>
    );
}

export default Comment;
