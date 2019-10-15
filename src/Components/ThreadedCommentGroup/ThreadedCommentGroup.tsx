import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';

interface ThreadedCommentGroupProps {
    comments: CommentModel[];
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    const [depthHovered, setDepthHovered] = useState<number | null>(null);

    return (
        <div>
            {
                props.comments.map((comment) =>
                    <ThreadedComment
                        key={comment.id}
                        comment={comment}
                        depthHovered={depthHovered}
                        onThreadHover={(depthHovered) => setDepthHovered(depthHovered)}
                    />)
            }
        </div>
    );
}

export default ThreadedCommentGroup;
