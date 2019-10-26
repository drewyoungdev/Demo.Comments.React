import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedCommentGroup.scss';
import ThreadClickContext from '../../Contexts/ThreadClickContext';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    parentIdBreadcrumbs: string[];
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    console.log('rendered ThreadedCommentGroup');

    // Each comment group controls it's own set of replies
    // However, when a functional component is initialized with "props" we get some issues
    // Right now it's receiving the state of the previous replies when a new comment is pushed to the top of the stack
    const [replies, setReplies] = useState<CommentModel[]>([...props.rootComment.replies]);

    console.log(props.parentIdBreadcrumbs, props.rootComment)

    return (
        <ThreadClickContext.Consumer>
            {({ isThreadClosed }) => (
                <>
                    {/* Root Comment */}
                    <ThreadedComment
                        comment={props.rootComment}
                        parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                        addNewComment={(newComment) => setReplies((prevReplies) => [newComment, ...prevReplies])}
                        // addNewComment={(newComment) => setReplies((prevReplies) => [...prevReplies, newComment])}
                    />
                    <div className={ isThreadClosed(props.rootComment.id) ? "hidden" : "" }>
                        {
                            replies.map((comment, idx) =>
                                <div key={idx}>
                                    {/* Replies */}
                                    <ThreadedCommentGroup
                                        rootComment={comment}
                                        parentIdBreadcrumbs={[...props.parentIdBreadcrumbs, comment.id]}
                                    />
                                </div>
                            )
                        }
                    </div>
                </>
            )}
        </ThreadClickContext.Consumer>
    );
}

export default ThreadedCommentGroup;
