import React from 'react';
import './Thread.scss';
import ThreadHoverContext from '../../Contexts/ThreadHoverContext';
import ThreadClickContext from '../../Contexts/ThreadClickContext';
import { ClassList } from '../../Helpers/ClassList';

interface ThreadProps {
    isRootThread: boolean;
    parentId: string;
}

const Thread: React.FC<ThreadProps> = (props) => {
    // console.log('rendered Thread');
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
                            ClassList.create({
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
