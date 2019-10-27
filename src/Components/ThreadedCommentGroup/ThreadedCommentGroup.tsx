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
    // console.log('rendered ThreadedCommentGroup');
    const [replies, setReplies] = useState<CommentModel[]>(props.rootComment.replies);

    return (
        <ThreadClickContext.Consumer>
            {({ isThreadClosed }) => (
                <>
                    {/* Root Comment */}
                    <ThreadedComment
                        comment={props.rootComment}
                        parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                        addNewComment={(newComment) => setReplies((prevReplies) => [newComment, ...prevReplies])}
                    />
                    <div className={ isThreadClosed(props.rootComment.id) ? "hidden" : "" }>
                        {
                            replies.map((comment) =>
                                <div key={comment.id}>
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
