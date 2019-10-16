import React from 'react';
import './VoteButtons.scss';

interface VoteButtonsProps {
    commentId: string;
}

const VoteButtons: React.FC<VoteButtonsProps> = (props) => {
    return (
        <div className="vote-buttons">
            ^
        </div>
    );
}

export default VoteButtons;
