import React from 'react';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedComment.scss';
import ActionableComment from '../ActionableComment/ActionableComment';

interface ThreadedCommentProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    addNewComment: (newComment: CommentModel) => void;
}

const ThreadedComment: React.FC<ThreadedCommentProps> = (props) => {
    // console.log('rendered ThreadedComment');
    return (
        <div className="thread-group-container">
            <ThreadGroup
                depth={props.comment.depth}
                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
            />
            <ActionableComment {...props} />
        </div>
    );
}

export default ThreadedComment;
