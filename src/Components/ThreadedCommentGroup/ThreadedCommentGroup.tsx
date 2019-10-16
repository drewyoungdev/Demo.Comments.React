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
    const [depthHovered, setDepthHovered] = useState<number | null>(null);

    return (
        <div>
            {/* Root Comment */}
            <ThreadedComment
                comment={props.rootComment}
                depthHovered={props.depthHovered !== undefined ? props.depthHovered : depthHovered}
                onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
            />
            {
                props.replies.map((comment) =>
                    <div>
                        {/* Replies */}
                        <ThreadedCommentGroup
                            rootComment={comment}
                            replies={comment.replies}
                            depthHovered={props.depthHovered !== undefined ? props.depthHovered : depthHovered}
                            onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default ThreadedCommentGroup;
