import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';
import ThreadContext from '../../Contexts/ThreadContext';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
    // isCollapsed: boolean;
    // parentIdHovered: string | null;
    // onThreadHover: (parentIdHovered: string | null) => void;
    // onThreadClick: (parentIdClicked: string) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    console.log('rendered Thread');
    return (
        <ThreadContext.Consumer>
            {({ parentIdHovered, toggleParentIdHovered}) => (
                <div
                    className="thread"
                    onMouseOver={() => toggleParentIdHovered(props.parentId)}
                    onMouseOut={() => toggleParentIdHovered(null)}
                    // onClick={() => props.onThreadClick(props.parentId)}
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
