import React, { useState } from 'react';
import ThreadedComment from '../ThreadedComment/ThreadedComment';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedCommentGroup.scss';
import ThreadClickContext from '../../Contexts/ThreadClickContext';
import MoreReplies from '../MoreReplies/MoreReplies';

interface ThreadedCommentGroupProps {
    rootComment: CommentModel;
    parentIdBreadcrumbs: string[];
    depth: number;
}

const ThreadedCommentGroup: React.FC<ThreadedCommentGroupProps> = (props) => {
    // console.log('rendered ThreadedCommentGroup');
    const [replies, setReplies] = useState<CommentModel[]>(props.rootComment.replies);
    const [isMoreRepliesLoaded, setIsMoreRepliesLoaded] = useState<boolean>(false);

    return (
        <ThreadClickContext.Consumer>
            {({ isThreadClosed }) => (
                <>
                    {/* Root Comment */}
                    <ThreadedComment
                        comment={props.rootComment}
                        parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                        depth={props.depth}
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
                                        depth={props.depth + 1}
                                    />
                                </div>
                            )
                        }
                        <div className={ props.rootComment.numOfHiddenReplies === 0 || isMoreRepliesLoaded ? "hidden" : "" }>
                            {/* More Replies */}
                            {
                                <MoreReplies
                                    commentId={props.rootComment.id}
                                    numOfHiddenReplies={props.rootComment.numOfHiddenReplies}
                                    depth={props.depth + 1}
                                    parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                                    loadMoreReplies={(replies) =>
                                        {
                                            setIsMoreRepliesLoaded(true);
                                            setReplies((prevReplies) => [...prevReplies, ...replies]);
                                        }
                                    }
                                />
                            }
                        </div>
                    </div>
                </>
            )}
        </ThreadClickContext.Consumer>
    );
}

export default ThreadedCommentGroup;
