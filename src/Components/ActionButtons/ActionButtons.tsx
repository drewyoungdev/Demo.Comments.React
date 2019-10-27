import React from 'react';
import './ActionButtons.scss';
import VoteButtons from '../VoteButtons/VoteButtons';
import ExpandButton from '../ExpandButton/ExpandButton';
import ThreadClickContext from '../../Contexts/ThreadClickContext';

interface ActionButtonsProps {
    commentId: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = (props: ActionButtonsProps) => {
    return (
        <ThreadClickContext.Consumer>
            {({ isThreadClosed, openThread }) => (
                <>
                    <div className={ isThreadClosed(props.commentId) ? "hidden" : ""}>
                        <VoteButtons
                            commentId={props.commentId}
                            onVote={console.log}
                        />
                    </div>
                    <div className={ isThreadClosed(props.commentId) ? "" : "hidden"}>
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
