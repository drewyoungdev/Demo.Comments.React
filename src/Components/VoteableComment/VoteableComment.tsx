import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import VoteButtons from '../VoteButtons/VoteButtons';
import Comment from '../Comment/Comment';

interface VoteableCommentProps {
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

const VoteableComment: React.FC<VoteableCommentProps> = (props) => {
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
                <Comment {...props} />
            </div>
        </div>
    );
}

export default VoteableComment;
