import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedCommentGroup.scss';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    replies: CommentModel[];
    parentIdBreadcrumbs: string[];
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    console.log('rendered ThreadedCommentGroup');
    const [replies, setReplies] = useState<CommentModel[]>(props.replies);

    return (
            <div>
                {/* Root Comment */}
                <ThreadedComment
                    comment={props.rootComment}
                    addNewComment={(newComment) => setReplies((prevReplies) => [...prevReplies, newComment])}
                    parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                />
                {/* <div className={ isCollapsed(props) ? "hidden" : "" }> */}
                    {
                        replies.map((comment, idx) =>
                            <div key={idx}>
                                {/* Replies */}
                                <ThreadedCommentGroup
                                    rootComment={comment}
                                    replies={comment.replies}
                                    parentIdBreadcrumbs={[...props.parentIdBreadcrumbs, comment.id]}
                                />
                            </div>
                        )
                    }
                {/* </div> */}
            </div>
    );
}

export default ThreadedCommentGroup;
