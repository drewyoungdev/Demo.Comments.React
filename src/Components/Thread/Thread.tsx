import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
    depth: number;
    parentIdHovered: string | null;
    onThreadHover: (parentIdHovered: string | null) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    return (
        <div
            className="thread"
            onMouseOver={() => props.onThreadHover(props.parentId)}
            onMouseOut={() => props.onThreadHover(null)}>
            <i className={
                classList({
                    "thread-line": true,
                    "root-thread-line": props.isRootThread,
                    "thread-line-hovered": props.parentIdHovered === props.parentId
                })
            } />
        </div>
    );
}

export default Thread;
