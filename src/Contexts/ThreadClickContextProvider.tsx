import React, { Component } from 'react';
import ThreadClickContext from './ThreadClickContext';

type ThreadClickState = {
    parentIdsClosed: string[];
}

class ThreadClickContextProvider extends Component<{}, ThreadClickState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            parentIdsClosed: [] as string[]
        }
    }

    openThread = (parentId: string) => {
    }

    closeThread = (parentId: string) => {
        this.setState(prevState => ({
            parentIdsClosed: [...prevState.parentIdsClosed, parentId]
        }))
    }

    isThreadClosed = (parentId: string): boolean => {
        console.log('hello');
        return this.state.parentIdsClosed.includes(parentId);;
    }

    render () {
        return(
            <ThreadClickContext.Provider
                value={{
                    openThread: this.openThread,
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
