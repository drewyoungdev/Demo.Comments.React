import React, { useState } from 'react';
import './ReplyBox.scss';

interface ReplyBoxProps {
    onReplyClick: (replyText: string) => void;
    onCancelClick: () => void;
}

const ReplyBox: React.FC<ReplyBoxProps> = (props) => {
    const [replyText, setReplyText] = useState<string>("");

    return (
        <div className="reply-box">
            <textarea
                className="draft-editor"
                placeholder="What are your thoughts?"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="reply-box-footer">
                <button onClick={() => props.onReplyClick(replyText)}>Reply</button>
                <button onClick={props.onCancelClick}>Cancel</button>
            </div>
        </div>
    );
}

export default ReplyBox;
