import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    replies: CommentModel[];

    // recursive properties
    depthHovered?: number | null;
    onThreadHover?: (depthHovered: number | null) => void;
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    const { depthHovered, onThreadHover, replies, rootComment } = props
    const [depthHover, setDepthHovered] = useState<number | null>(null);

    return (
        <div>
            {/* Root Comment */}
            <ThreadedComment
                comment={rootComment}
                depthHovered={depthHovered !== undefined ? depthHovered : depthHover}
                onThreadHover={onThreadHover !== undefined ? onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
            />
            {
                replies.map((comment) =>
                    <div>
                        {/* Replies */}
                        <ThreadedCommentGroup
                            rootComment={comment}
                            replies={comment.replies}
                            depthHovered={depthHovered !== undefined ? depthHovered : depthHover}
                            onThreadHover={onThreadHover !== undefined ? onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default ThreadedCommentGroup;
