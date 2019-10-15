import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';

interface ThreadedCommentGroupProps {
    comments: CommentModel[];

    // recursive properties
    depthHovered?: number | null;
    onThreadHover?: (depthHovered: number) => void;
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    const [depthHovered, setDepthHovered] = useState<number | null>(null);

    return (
        <div>
            {
                props.comments.map((comment) =>
                    <div>
                        {/* Root Comment */}
                        <ThreadedComment
                            key={comment.id}
                            comment={comment}
                            depthHovered={props.depthHovered !== undefined ? props.depthHovered : depthHovered}
                            onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
                        />

                        {/* Replies */}
                        <ThreadedCommentGroup
                            comments={comment.replies}
                            depthHovered={props.depthHovered !== undefined ? props.depthHovered : depthHovered}
                            onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}/>
                    </div>)
            }
        </div>
    );
}

export default ThreadedCommentGroup;
