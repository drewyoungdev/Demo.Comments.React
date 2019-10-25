import React, { Component } from 'react';
import ThreadClickContext from './ThreadClickContext';

type ThreadClickState = {
    parentIdsClicked: string[];
}

class ThreadClickContextProvider extends Component<{}, ThreadClickState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            parentIdsClicked: [] as string[]
        }
    }

    closeThread = (parentId: string) => {
    }

    isThreadClosed = (parentId: string): boolean => {
        return this.state.parentIdsClicked.includes(parentId);;
    }

    render () {
        return(
            <ThreadClickContext.Provider
                value={{
                    closeThread: this.closeThread,
                    isThreadClosed: this.isThreadClosed
                }}
            >
                {this.props.children}
            </ThreadClickContext.Provider>
        )
    }
}

export default ThreadClickContextProvider;
