import React, { useState } from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './ThreadedCommentGroup.scss';
import ThreadClickContext from '../../Contexts/ThreadClickContext';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import ActionButtons from '../ActionButtons/ActionButtons';
import Comment from '../Comment/Comment';
import MoreReplies from '../MoreReplies/MoreReplies';
import { ClassList } from '../../Helpers/ClassList';
import { DepthPaddingCalculator } from '../../Helpers/DepthPaddingCalculator';

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
                    <div className="comment-group-item">
                        <ThreadGroup
                            depth={props.depth}
                            parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                        />
                        <div style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth) - 33}}>
                            <ActionButtons
                                isCollapsed={isThreadClosed(props.rootComment.id)}
                                commentId={props.rootComment.id}
                            />
                        </div>
                        <div style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth)}}>
                            <Comment
                                isCollapsed={isThreadClosed(props.rootComment.id)}
                                comment={props.rootComment}
                                addNewComment={(newComment) => setReplies((prevReplies) => [newComment, ...prevReplies])}
                            />
                        </div>
                    </div>
                    <div className={ isThreadClosed(props.rootComment.id) ? "hidden" : "" }>
                        {/* Replies */}
                        {
                            replies.map((comment) =>
                                <ThreadedCommentGroup
                                    key={comment.id}
                                    rootComment={comment}
                                    parentIdBreadcrumbs={[...props.parentIdBreadcrumbs, comment.id]}
                                    depth={props.depth + 1}
                                />
                            )
                        }
                        <div
                            className={ClassList.create({
                                "comment-group-item": true,
                                "hidden": props.rootComment.numOfHiddenReplies === 0 || isMoreRepliesLoaded
                            })}
                        >
                            <ThreadGroup
                                depth={props.depth + 1}
                                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
                            />
                            <div style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth + 1) - 23}}>
                                <MoreReplies
                                    commentId={props.rootComment.id}
                                    numOfHiddenReplies={props.rootComment.numOfHiddenReplies}
                                    depth={props.depth + 1}
                                    loadMoreReplies={(replies) =>
                                        {
                                            setIsMoreRepliesLoaded(true);
                                            setReplies((prevReplies) => [...prevReplies, ...replies]);
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </ThreadClickContext.Consumer>
    );
}

export default ThreadedCommentGroup;
