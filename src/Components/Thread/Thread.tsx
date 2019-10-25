import React from 'react';
import './Thread.scss';
import { classList } from '../../Helpers/classList';
import ThreadHoverContext from '../../Contexts/ThreadHoverContext';
import ThreadClickContext from '../../Contexts/ThreadClickContext';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
}

const Thread: React.FC<ThreadProps> = (props) => {
    console.log('rendered Thread');
    return (
        <ThreadHoverContext.Consumer>
            {({ parentIdHovered, hoverThread }) => (
                <ThreadClickContext.Consumer>
                    {({ closeThread }) => (
                        <div
                            className="thread"
                            onMouseOver={() => hoverThread(props.parentId)}
                            onMouseOut={() => hoverThread(null)}
                            onClick={() => closeThread(props.parentId)}
                        >
                        <i className={
                            classList({
                                "thread-line": true,
                                "root-thread-line": props.isRootThread,
                                "thread-line-hovered": parentIdHovered === props.parentId
                            })
                        } />
                        </div>
                    )}
                </ThreadClickContext.Consumer>
            )}
        </ThreadHoverContext.Consumer>
    );
}

export default Thread;
