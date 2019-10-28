import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import Comment from '../Comment/Comment';
import ActionButtons from '../ActionButtons/ActionButtons';
import { DepthPaddingCalculator } from '../../Helpers/DepthPaddingCalculator';

interface ActionableCommentProps {
    comment: CommentModel;
    depth: number;
    addNewComment: (newComment: CommentModel) => void;
}

const ActionableComment: React.FC<ActionableCommentProps> = (props) => {
    return (
        <>
            <div style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth) - 33}}>
                <ActionButtons commentId={props.comment.id} />
            </div>
            <div style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth)}}>
                <Comment {...props} />
            </div>
        </>
    );
}

export default ActionableComment;
