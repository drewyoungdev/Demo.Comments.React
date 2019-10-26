import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadedCommentGroup from '../ThreadedCommentGroup/ThreadedCommentGroup';
import ThreadClickContextProvider from '../../Contexts/ThreadClickContextProvider';
import ThreadHoverContextProvider from '../../Contexts/ThreadHoverContextProvider';

interface ThreadedCommentGroupWithContextProps {
    rootComment: CommentModel;
    replies: CommentModel[];
}

// Technically this is just the "RootComment"
const ThreadedCommentGroupWithContext: React.FC<ThreadedCommentGroupWithContextProps> = (props) => {
    return (
        <ThreadHoverContextProvider>
            <ThreadClickContextProvider>
                <ThreadedCommentGroup
                    rootComment={props.rootComment}
                    parentIdBreadcrumbs={[props.rootComment.id]}
                />
            </ThreadClickContextProvider>
        </ThreadHoverContextProvider>
    );
}
export default ThreadedCommentGroupWithContext;
