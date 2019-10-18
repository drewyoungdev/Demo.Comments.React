import React from 'react';
import Thread from '../Thread/Thread';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    comment: CommentModel;
    parentIdBreadcrumbs: string[];
    parentIdHovered: string | null;
    onThreadHover: (parentIdHovered: string | null) => void;
}

const renderThreads = (comment: CommentModel, parentIdBreadcrumbs: string[], depth: number, parentIdHovered: string | null, onThreadHover: (parentIdHovered: string | null) => void) => {
    let threads = [];


    for (let i = 0; i <= depth; i++) {
        threads.push(
            <Thread
                key={i}
                isRootThread={i === comment.depth}
                parentId={parentIdBreadcrumbs[i]}
                depth={i}
                parentIdHovered={parentIdHovered}
                onThreadHover={(parentIdHovered) => onThreadHover(parentIdHovered)}
            />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {
    return (
        <div className="thread-group">
            {renderThreads(props.comment, props.parentIdBreadcrumbs, props.comment.depth, props.parentIdHovered, props.onThreadHover)}
        </div>
    );
}

export default ThreadGroup;
