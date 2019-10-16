import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Thread.scss';
import { classList } from '../../Helpers/classList';

interface ThreadProps {
    rootComment: CommentModel;
    depth: number;
    depthHovered: number | null;
    onThreadHover: (depthHovered: number | null) => void;
}

const Thread: React.FC<ThreadProps> = (props) => {
    return (
        <div
            className="thread"
            onMouseOver={() => props.onThreadHover(props.depth)}
            onMouseOut={() => props.onThreadHover(null)}>
            <i className={
                classList({
                    "thread-line": true,
                    "root-thread-line": props.depth === props.rootComment.depth,
                    "thread-line-hovered": props.depthHovered === props.depth
                })
            } />
        </div>
    );
}

export default Thread;
