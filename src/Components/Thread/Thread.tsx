import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';

interface ThreadProps {
    isRootThread: boolean;
    isCollapsed: boolean;
    parentId: string;
    depth: number;
    parentIdHovered: string | null;
    onThreadHover: (parentIdHovered: string | null) => void;
    onThreadClick: (parentIdClicked: string) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    return (
        <div
            className="thread"
            onMouseOver={() => props.onThreadHover(props.parentId)}
            onMouseOut={() => props.onThreadHover(null)}
            onClick={() => props.onThreadClick(props.parentId)}>
            <i className={
                classList({
                    "thread-line": true,
                    "root-thread-line": props.isRootThread,
                    "root-thread-line hidden": props.isRootThread && props.isCollapsed,
                    "thread-line-hovered": props.parentIdHovered === props.parentId
                })
            } />
        </div>
    );
}

export default Thread;
