import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadedCommentGroup from '../ThreadedCommentGroup/ThreadedCommentGroup';
import ThreadClickContextProvider from '../../Contexts/ThreadClickContextProvider';
import ThreadHoverContextProvider from '../../Contexts/ThreadHoverContextProvider';

interface ThreadedCommentRootProps {
    rootComment: CommentModel;
}

const ThreadedCommentRoot: React.FC<ThreadedCommentRootProps> = (props) => {
    return (
        <ThreadHoverContextProvider>
            <ThreadClickContextProvider>
                <ThreadedCommentGroup
                    rootComment={props.rootComment}
                    parentIdBreadcrumbs={[props.rootComment.id]}
                    depth={0}
                />
            </ThreadClickContextProvider>
        </ThreadHoverContextProvider>
    );
}
export default ThreadedCommentRoot;
