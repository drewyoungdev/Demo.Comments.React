import React from 'react';
import { classList } from '../../Helpers/classList';

interface ExpandButtonProps {
    commentId: string;
    onExpandClick: (parentIdClicked: string) => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = (props: ExpandButtonProps) => {
    return (
        <div className="action-buttons">
            <button onClick={() => props.onExpandClick(props.commentId)}>
                <i
                    className={classList({
                        "expand-button": true,
                        "plus": true,
                        "circle": true,
                        "icon": true
                    })}
                />
            </button>
        </div>
    );
}

export default ExpandButton;
