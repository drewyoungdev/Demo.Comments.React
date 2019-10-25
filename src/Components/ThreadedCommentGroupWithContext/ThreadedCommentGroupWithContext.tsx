import React, { useState } from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadHoveredContext from '../../Contexts/ThreadHoveredContext';
import ThreadedCommentGroup from '../ThreadedCommentGroup/ThreadedCommentGroup';


interface ThreadedCommentGroupWithContextProps {
    rootComment: CommentModel;
    replies: CommentModel[];
}

const ThreadedCommentGroupWithContext: React.FC<ThreadedCommentGroupWithContextProps> = (props) => {
    const [parentIdHovered, setParentIdHovered] = useState<string | null>(null);

    const toggleParentIdHovered = (parentId: string | null) => {
        console.log(parentIdHovered)
        setParentIdHovered(parentId);
    }

    return (
        <ThreadHoveredContext.Provider
            value={{
                parentIdHovered: parentIdHovered,
                toggleParentIdHovered: toggleParentIdHovered,
            }}
        >
            <ThreadedCommentGroup
                rootComment={props.rootComment}
                replies={props.replies}
                parentIdBreadcrumbs={[props.rootComment.id]}
                // parentIdsClicked={parentIdsClicked}
                // onThreadClick={(parentIdClicked) => addParentId(parentIdClicked)}
                // onExpandClick={(parentIdClicked) => removeParentId(parentIdClicked)}
            />
        </ThreadHoveredContext.Provider>
    );
}
export default ThreadedCommentGroupWithContext;
