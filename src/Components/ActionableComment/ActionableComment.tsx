import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import Comment from '../Comment/Comment';
import ActionButtons from '../ActionButtons/ActionButtons';

interface ActionableCommentProps {
    comment: CommentModel;
    depth: number;
    addNewComment: (newComment: CommentModel) => void;
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

const ActionableComment: React.FC<ActionableCommentProps> = (props) => {
    return (
        <>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.depth) - 33}}>
                <ActionButtons commentId={props.comment.id} />
            </div>
            <div style={{ paddingLeft: calcPaddingLeftPx(props.depth)}}>
                <Comment {...props} />
            </div>
        </>
    );
}

export default ActionableComment;
