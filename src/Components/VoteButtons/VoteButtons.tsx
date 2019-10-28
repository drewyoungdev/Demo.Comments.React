import React, { useState } from 'react';
import './VoteButtons.scss';
import { ClassList } from '../../Helpers/ClassList';

interface VoteRequest {
    // HTTP 429 is used to prevent bot voting from making too many subsequent requests
    id: string;
    direction: number; // 1 upvote, 0 unvote, -1 downvote
}

interface VoteButtonsProps {
    commentId: string;
    onVote: (voteRequest: VoteRequest) => void;
}

const VoteButtons: React.FC<VoteButtonsProps> = (props) => {
    const [voteDirection, setVoteDirection] = useState<number>(0);

    return (
        <div className="action-buttons">
            <button onClick={() =>
                {
                    var selectedVoteDirection = voteDirection === 1 ? 0 : 1;

                    setVoteDirection(selectedVoteDirection);

                    props.onVote({ id: props.commentId, direction: selectedVoteDirection });
                }}>
                <i
                    className={ClassList.create({
                        "upvote": true,
                        "arrow": true,
                        "up": true,
                        "icon": true,
                        "upvote-selected": voteDirection === 1
                    })}
                />
            </button>
            <button onClick={() =>
                {
                    var selectedVoteDirection = voteDirection === -1 ? 0 : -1;

                    setVoteDirection(selectedVoteDirection);

                    props.onVote({ id: props.commentId, direction: selectedVoteDirection });
                }}>
                <i
                    className={ClassList.create({
                        "downvote": true,
                        "arrow": true,
                        "down": true,
                        "icon": true,
                        "downvote-selected": voteDirection === -1
                    })}
                />
            </button>
        </div>
    );
}

export default VoteButtons;
