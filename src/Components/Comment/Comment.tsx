import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import './Comment.scss';

interface CommentProps {
    comment: CommentModel;
}

const Comment: React.FC<CommentProps> = (props) => {
    return (
        <div className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.
        </div>
    );
}

export default Comment;
