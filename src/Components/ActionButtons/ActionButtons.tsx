import React from 'react';
import './ActionButtons.scss';
import VoteButtons from '../VoteButtons/VoteButtons';
import ExpandButton from '../ExpandButton/ExpandButton';

interface ActionButtonsProps {
    commentId: string;
    // isCollapsed: boolean;
    // onExpandClick: (parentIdClicked: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = (props: ActionButtonsProps) => {
    return (
        <>
            <VoteButtons
                commentId={props.commentId}
                onUpvoteClick={console.log}
                onDownvoteClick={console.log}
            />
            {/* <div className={ props.isCollapsed ? "hidden" : ""}>
                <VoteButtons
                    commentId={props.commentId}
                    onUpvoteClick={console.log}
                    onDownvoteClick={console.log}
                />
            </div>
            <div className={ props.isCollapsed ? "" : "hidden"}>
                <ExpandButton
                    commentId={props.commentId}
                    onExpandClick={props.onExpandClick}
                />
            </div> */}
        </>
    );
}

export default ActionButtons;
