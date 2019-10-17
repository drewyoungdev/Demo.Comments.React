import React from 'react';
import Thread from '../Thread/Thread';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    comment: CommentModel;
    depthHovered: number | null;
    onThreadHover: (depthHovered: number | null) => void;
}

const renderThreads = (comment: CommentModel, depth: number, depthHovered: number | null, onThreadHover: (depthHovered: number | null) => void) => {
    let threads = [];

    // if it's a newComment and it's the root depth, can it get a new ref to emit hovers?

    // or what if the depthHovered is a hash of the parent id + depth???

    for (let i = 0; i <= depth; i++) {
        threads.push(
            <Thread
                key={i}
                rootComment={comment}
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
            {renderThreads(props.comment, props.comment.depth, props.depthHovered, props.onThreadHover)}
        </div>
    );
}

export default ThreadGroup;
