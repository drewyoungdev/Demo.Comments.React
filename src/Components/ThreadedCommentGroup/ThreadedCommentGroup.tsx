import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    replies: CommentModel[];
    parentIdBreadcrumbs: string[];

    // recursive properties
    parentIdHovered?: string | null;
    onThreadHover?: (parentIdHovered: string | null) => void;
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    const [parentIdHovered, setParentIdHovered] = useState<string | null>(null);
    const [replies, setReplies] = useState<CommentModel[]>(props.replies);

    return (
        <div>
            {/* Root Comment */}
            <ThreadedComment
                comment={props.rootComment}
                addNewComment={(newComment) => setReplies((prevReplies) => [...prevReplies, newComment])}
                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                parentIdHovered={props.parentIdHovered !== undefined ? props.parentIdHovered : parentIdHovered}
                onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (parentIdHovered) => setParentIdHovered(parentIdHovered)}
            />
            {
                replies.map((comment, idx) =>
                    <div key={idx}>
                        {/* Replies */}
                        <ThreadedCommentGroup
                            rootComment={comment}
                            parentIdBreadcrumbs={[...props.parentIdBreadcrumbs, comment.id]}
                            replies={comment.replies}
                            parentIdHovered={props.parentIdHovered !== undefined ? props.parentIdHovered : parentIdHovered}
                            onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (parentIdHovered) => setParentIdHovered(parentIdHovered)}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default ThreadedCommentGroup;
