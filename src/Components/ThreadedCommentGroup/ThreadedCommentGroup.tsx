import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedCommentGroup.scss';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    replies: CommentModel[];
    parentIdBreadcrumbs: string[];
    parentIdsClicked: string[];
    onThreadClick: (parentIdClicked: string) => void;
    onExpandClick: (parentIdClicked: string) => void;

    // recursive properties
    parentIdHovered?: string | null;
    onThreadHover?: (parentIdHovered: string | null) => void;
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    const [parentIdHovered, setParentIdHovered] = useState<string | null>(null);
    const [replies, setReplies] = useState<CommentModel[]>(props.replies);

    const isCollapsed = (props: ThreadedCommentGroupProps): boolean => {
        return props.parentIdsClicked.includes(props.rootComment.id);
    }

    return (
        <div>
            {/* Root Comment */}
            <ThreadedComment
                comment={props.rootComment}
                addNewComment={(newComment) => setReplies((prevReplies) => [...prevReplies, newComment])}
                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                parentIdsClicked={props.parentIdsClicked}
                parentIdHovered={props.parentIdHovered !== undefined ? props.parentIdHovered : parentIdHovered}
                onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (parentIdHovered) => setParentIdHovered(parentIdHovered)}
                onThreadClick={props.onThreadClick}
                isCollapsed={isCollapsed(props)}
                onExpandClick={props.onExpandClick}
            />
            <div className={ isCollapsed(props) ? "hidden" : "" }>
                {
                    replies.map((comment, idx) =>
                        <div key={idx}>
                            {/* Replies */}
                            <ThreadedCommentGroup
                                rootComment={comment}
                                parentIdBreadcrumbs={[...props.parentIdBreadcrumbs, comment.id]}
                                parentIdsClicked={props.parentIdsClicked}
                                replies={comment.replies}
                                parentIdHovered={props.parentIdHovered !== undefined ? props.parentIdHovered : parentIdHovered}
                                onThreadHover={props.onThreadHover !== undefined ? props.onThreadHover : (parentIdHovered) => setParentIdHovered(parentIdHovered)}
                                onThreadClick={props.onThreadClick}
                                onExpandClick={props.onExpandClick}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ThreadedCommentGroup;
