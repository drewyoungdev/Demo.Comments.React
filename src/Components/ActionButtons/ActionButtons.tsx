import React from 'react';
import './ActionButtons.scss';
import VoteButtons from '../VoteButtons/VoteButtons';
import ExpandButton from '../ExpandButton/ExpandButton';
import ThreadClickContext from '../../Contexts/ThreadClickContext';

interface ActionButtonsProps {
    isCollapsed: boolean;
    commentId: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = (props: ActionButtonsProps) => {
    return (
        <ThreadClickContext.Consumer>
            {({ openThread }) => (
                <>
                    <div className={ props.isCollapsed ? "hidden" : ""}>
                        <VoteButtons
                            commentId={props.commentId}
                            onVote={console.log}
                        />
                    </div>
                    <div className={ props.isCollapsed ? "" : "hidden"}>
                        <ExpandButton
                            commentId={props.commentId}
                            onExpandClick={openThread}
                        />
                    </div>
                </>
            )}
        </ThreadClickContext.Consumer>
    );
}

export default ActionButtons;
