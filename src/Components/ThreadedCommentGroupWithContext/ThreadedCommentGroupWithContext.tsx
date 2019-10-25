import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadedCommentGroup from '../ThreadedCommentGroup/ThreadedCommentGroup';
import ThreadContextProvider from '../../Contexts/ThreadContextProvider';

interface ThreadedCommentGroupWithContextProps {
    rootComment: CommentModel;
    replies: CommentModel[];
}

const ThreadedCommentGroupWithContext: React.FC<ThreadedCommentGroupWithContextProps> = (props) => {
    return (
        <ThreadContextProvider>
            <ThreadedCommentGroup
                rootComment={props.rootComment}
                replies={props.replies}
                parentIdBreadcrumbs={[props.rootComment.id]}
            />
        </ThreadContextProvider>
    );
}
export default ThreadedCommentGroupWithContext;
