import React from 'react';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import VoteableComment from '../VoteableComment/VoteableComment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedComment.scss';

interface ThreadedCommentProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    parentIdsClicked: string[];
    parentIdHovered: string | null;
    onThreadHover: (parentIdHovered: string | null) => void;
    onThreadClick: (parentIdClicked: string) => void;
    addNewComment: (newComment: CommentModel) => void;
    isCollapsed: boolean;
    onExpandClick: (parentIdClicked: string) => void;
}

const ThreadedComment: React.FC<ThreadedCommentProps> = (props) => {
    return (
        <div className="thread-group-container">
            <ThreadGroup {...props} />
            <VoteableComment {...props} />
        </div>
    );
}

export default ThreadedComment;
