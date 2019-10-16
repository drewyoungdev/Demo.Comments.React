import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';

interface CommentProps {
    comment: CommentModel;
}

const calcPaddingLeftPx = (depth: number) => {
    const threadWidthPx = 16;
    const threadMarginLeftPx = 5;
    const threadLineWidthPx = 2;
    const baselinePaddingLeftPx = threadWidthPx + threadMarginLeftPx + threadLineWidthPx;

    const additionalPaddingLeftPx = 15;
    const paddingLeftFromThreadlinePx = baselinePaddingLeftPx + additionalPaddingLeftPx;

    if (depth === 0) {
        return `${paddingLeftFromThreadlinePx}px`;
    }

    const paddingLeftFromThreadlineGroup = baselinePaddingLeftPx * depth

    return `${paddingLeftFromThreadlineGroup + paddingLeftFromThreadlinePx}px`
}

const Comment: React.FC<CommentProps> = (props) => {
    return (
        <div style={{ paddingLeft: calcPaddingLeftPx(props.comment.depth)}}>
            <div className="comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
            </div>
        </div>
    );
}

export default Comment;
