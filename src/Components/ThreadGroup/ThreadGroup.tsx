import React from 'react';
import Thread from '../Thread/Thread';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    comment: CommentModel;
}

const renderThreads = (comment: CommentModel) => {
    let threads = [];

    for (let i = 0; i <= comment.depth; i++) {
        threads.push(<Thread key={i} />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {
    return (
        <div className="thread-group">
            {renderThreads(props.comment)}
        </div>
    );
}

export default ThreadGroup;
