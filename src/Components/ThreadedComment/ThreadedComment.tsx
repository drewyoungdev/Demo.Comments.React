import React from 'react';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import Comment from '../Comment/Comment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedComment.scss';

interface ThreadedCommentProps {
    comment: CommentModel;
    depthHovered: number | null;
    onThreadHover: (depthHovered: number) => void;
}

const ThreadedComment: React.FC<ThreadedCommentProps> = (props) => {

    return (
        <div className="thread-group-container">
            <ThreadGroup {...props} />
            <Comment {...props} />
        </div>
    );
}

export default ThreadedComment;
