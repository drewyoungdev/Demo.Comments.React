import React from 'react';
import Thread from '../Thread/Thread';
import './ThreadGroup.scss';

interface ThreadGroupProps {
    depth: number;
    parentIdBreadcrumbs: string[];
}

const renderThreads = (depth: number, parentIdBreadcrumbs: string[]) => {
    // console.log('recreating brand new threads...');
    let threads = [];

    for (let i = 0; i <= depth; i++) {
        threads.push(
            <Thread
                key={i}
                isRootThread={i === depth}
                parentId={parentIdBreadcrumbs[i]}
            />);
    }

    return threads;
}

const ThreadGroup: React.FC<ThreadGroupProps> = (props) => {
    // console.log('rendered ThreadGroup');
    return (
        <div className="thread-group">
            {renderThreads(props.depth, props.parentIdBreadcrumbs)}
        </div>
    );
}

export default React.memo(ThreadGroup);
