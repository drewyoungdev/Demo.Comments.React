import React from 'react';
import { CommentModel } from '../../Models/CommentModel';
import ThreadGroup from '../ThreadGroup/ThreadGroup';
import './MoreReplies.scss'
import { DepthPaddingCalculator } from '../../Helpers/DepthPaddingCalculator';

interface MoreRepliesProps {
    commentId: string;
    numOfHiddenReplies: number;
    depth: number;
    parentIdBreadcrumbs: string[];
    loadMoreReplies: (replies: CommentModel[]) => void;
}

const getReplies = (commentId: string): CommentModel[] => {
    const commentFromServerId = Math.random().toString(36).substring(7);

    const replies = [
        {
            parentId: commentId,
            id: commentFromServerId,
            author: "current logged in user",
            text: "more replies!",
            createDate: new Date().toISOString(),
            replies: [
                {
                    parentId: commentFromServerId,
                    id: Math.random().toString(36).substring(7),
                    author: "current logged in user",
                    text: "reply to more replies!",
                    createDate: new Date().toISOString(),
                    replies: [],
                    numOfHiddenReplies: 0
                }
            ],
            numOfHiddenReplies: 0
        }
    ]

    return replies;
}

const MoreReplies: React.FC<MoreRepliesProps> = (props) => {
    // console.log('rendered MoreReplies');

    return (
        <>
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
        </>
    );
}

export default MoreReplies;
