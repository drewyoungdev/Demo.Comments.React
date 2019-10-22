import React, { useState } from 'react';
import './VoteButtons.scss';
import { classList } from '../../Helpers/classList';

interface VoteButtonsProps {
    commentId: string;
    onUpvoteClick: (commentId: string) => void;
    onDownvoteClick: (commentId: string) => void;
}

const VoteButtons: React.FC<VoteButtonsProps> = (props) => {
    const [isUpvoteSelected, setIsUpvoteSelected] = useState<boolean>(false);
    const [isDownvoteSelected, setIsDownvotedSelected] = useState<boolean>(false);

    return (
        <div className="action-buttons">
            <button onClick={() =>
                {
                    props.onUpvoteClick(props.commentId);
                    setIsUpvoteSelected(true);
                    setIsDownvotedSelected(false);
                }}>
                <i
                    className={classList({
                        "upvote": true,
                        "arrow": true,
                        "up": true,
                        "icon": true,
                        "upvote-selected": isUpvoteSelected
                    })}
                />
            </button>
            <button onClick={() =>
                {
                    props.onDownvoteClick(props.commentId);
                    setIsDownvotedSelected(true);
                    setIsUpvoteSelected(false);
                }}>
                <i
                    className={classList({
                        "downvote": true,
                        "arrow": true,
                        "down": true,
                        "icon": true,
                        "downvote-selected": isDownvoteSelected
                    })}
                />
            </button>
        </div>
    );
}

export default VoteButtons;
