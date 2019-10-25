import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';
import ThreadContext from '../../Contexts/ThreadContext';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
}

const Thread: React.FC<ThreadProps> = (props) => {
    console.log('rendered Thread');
    return (
        <ThreadContext.Consumer>
            {({ parentIdHovered, hoverThread, closeThread }) => (
                <div
                    className="thread"
                    onMouseOver={() => hoverThread(props.parentId)}
                    onMouseOut={() => hoverThread(null)}
                    onClick={() => closeThread(props.parentId)}
                >
                <i className={
                    classList({
                        "thread-line": true,
                        "root-thread-line": props.isRootThread,
                        // "root-thread-line hidden": props.isRootThread && props.isCollapsed,
                        "thread-line-hovered": parentIdHovered === props.parentId
                    })
                } />
                </div>
            )}
        </ThreadContext.Consumer>
    );
}

export default Thread;
