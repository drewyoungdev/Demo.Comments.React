import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import './MoreReplies.scss'
import { DepthPaddingCalculator } from '../../Helpers/depthPaddingCalculator';

interface MoreRepliesProps {
    commentId: string;
    numOfHiddenReplies: number;
    depth: number;
    parentIdBreadcrumbs: string[];
    loadMoreReplies: (replies: CommentModel[]) => void;
}

const getReplies = (commentId: string): CommentModel[] => {
    const replies = [
        {
            parentId: commentId,
            id: Math.random().toString(36).substring(7),
            author: "current logged in user",
            text: "more replies!",
            createDate: new Date().toISOString(),
            replies: [],
            numOfHiddenReplies: 0
        }
    ]

    return replies;
}

const MoreReplies: React.FC<MoreRepliesProps> = (props) => {
    // console.log('rendered MoreReplies');

    return (
        <div className="thread-group-container">
            <ThreadGroup
                depth={props.depth}
                parentIdBreadcrumbs={props.parentIdBreadcrumbs}
            />
            <div
                className="more-replies"
                style={{ paddingLeft: DepthPaddingCalculator.calculatePx(props.depth) - 23}}
                onClick={() => props.loadMoreReplies(getReplies(props.commentId))}
            >
                <p>
                    {props.numOfHiddenReplies} more {props.numOfHiddenReplies === 1 ? "reply" : "replies"}
                </p>
            </div>
        </div>
    );
}

export default MoreReplies;
