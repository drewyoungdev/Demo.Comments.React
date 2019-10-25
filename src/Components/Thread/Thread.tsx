import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';
import ThreadHoveredContext from '../../Contexts/ThreadHoveredContext';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
    // isCollapsed: boolean;
    // parentIdHovered: string | null;
    // onThreadHover: (parentIdHovered: string | null) => void;
    // onThreadClick: (parentIdClicked: string) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    // look into useCallback hook for onThreadHover and onThreadClick or Context API

    return (
        <ThreadHoveredContext.Consumer>
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
        </ThreadHoveredContext.Consumer>
    );
}

export default Thread;
