import React from 'react';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import { CommentModel } from '../../Models/CommentModel';
import ActionableComment from '../ActionableComment/ActionableComment';

interface ThreadedCommentProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    depth: number;
    addNewComment: (newComment: CommentModel) => void;
}

const ThreadedComment: React.FC<ThreadedCommentProps> = (props) => {
    // console.log('rendered ThreadedComment');

    return (
        <>
            <ThreadGroup
                depth={props.depth}
                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
            />
            <ActionableComment {...props} />
        </>
    );
}

export default ThreadedComment;
