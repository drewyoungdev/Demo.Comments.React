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
    const [replies, setReplies] = useState<CommentModel[]>(props.replies);

    return (
        <div>
            {/* Root Comment */}
            <ThreadedComment
                comment={props.rootComment}
                addNewComment={(newComment) => setReplies((prevReplies) => [...prevReplies, newComment])}
                depthHovered={props.depthHovered !== undefined ? props.depthHovered : depthHovered}
                onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (depthHovered) => setDepthHovered(depthHovered)}
            />
            {
                replies.map((comment, idx) =>
                    <div key={idx}>
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
