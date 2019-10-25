import React from 'react';
import Thread from '../Thread/Thread';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    depth: number;
    parentIdBreadcrumbs: string[];
    // parentIdHovered: string | null;
    // onThreadHover: (parentIdHovered: string | null) => void;
    // onThreadClick: (parentIdClicked: string) => void;
    // isCollapsed: boolean;
}

const renderThreads = (depth: number, parentIdBreadcrumbs: string[]) => {
    console.log('recreating brand new threads...');
    let threads = [];

    for (let i = 0; i <= depth; i++) {
        threads.push(
            <Thread
                key={i}
                isRootThread={i === depth}
                parentId={parentIdBreadcrumbs[i]}
                // isCollapsed={props.isCollapsed}
                // parentIdHovered={props.parentIdHovered}
                // onThreadHover={(parentIdHovered) => props.onThreadHover(parentIdHovered)}
                // onThreadClick={(parentIdClicked) => props.onThreadClick(parentIdClicked)}
            />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {

    return (
        <div className="thread-group">
            {renderThreads(props.depth, props.parentIdBreadcrumbs)}
        </div>
    );
}

export default React.memo(ThreadGroup);
