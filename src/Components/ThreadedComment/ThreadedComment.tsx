import React, { useState } from 'react';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedComment.scss';
import ActionableComment from '../ActionableComment/ActionableComment';

interface ThreadedCommentProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    addNewComment: (newComment: CommentModel) => void;
    // parentIdsClicked: string[];
    // parentIdHovered: string | null;
    // onThreadHover: (parentIdHovered: string | null) => void;
    // isCollapsed: boolean;
    // onThreadClick: (parentIdClicked: string) => void;
    // onExpandClick: (parentIdClicked: string) => void;
}

const ThreadedComment: React.FC<ThreadedCommentProps> = (props) => {
    console.log('rendered ThreadedCommentGroup');
    const [depth] = useState<number>(props.comment.depth);
    const [parentBreadCrumbs] = useState<string[]>(props.parentIdBreadcrumbs);

    return (
        <div className="thread-group-container">
            <ThreadGroup
                depth={depth}
                parentIdBreadcrumbs={parentBreadCrumbs}
            />
            <ActionableComment {...props} />
        </div>
    );
}

export default ThreadedComment;
