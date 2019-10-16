import React from 'react';
import Thread from '../Thread/Thread';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    comment: CommentModel;
    depthHovered: number | null;
    onThreadHover: (depthHovered: number | null) => void;
}

const renderThreads = (depth: number, depthHovered: number | null, onThreadHover: (depthHovered: number | null) => void) => {
    let threads = [];

    for (let i = 0; i <= depth; i++) {
        threads.push(
            <Thread
                key={i}
                depth={i}
                depthHovered={depthHovered}
                onThreadHover={(depthHovered) => onThreadHover(depthHovered)}
            />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {
    return (
        <div className="thread-group">
            {renderThreads(props.comment.depth, props.depthHovered, props.onThreadHover)}
        </div>
    );
}

export default ThreadGroup;
