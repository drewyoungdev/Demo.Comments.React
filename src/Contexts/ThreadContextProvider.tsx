import React from 'react';
import { Component } from "react";import ThreadContext from './ThreadContext';

type ThreadState = {
    parentIdHovered: string | null;
    parentIdsClicked: string[];
}

class ThreadContextProvider extends Component<{}, ThreadState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            parentIdHovered: null,
            parentIdsClicked: [] as string[]
        }
    }

    hoverThread = (parentId: string | null) => {
        this.setState({ parentIdHovered: parentId})
    }

    closeThread = (parentId: string) => {
    }

    isThreadClosed = (parentId: string): boolean => {
        return this.state.parentIdsClicked.includes(parentId);;
    }

    render () {
        return(
            <ThreadContext.Provider
                value={{
                    parentIdHovered: this.state.parentIdHovered,
                    hoverThread: this.hoverThread,
                    closeThread: this.closeThread,
                    isThreadClosed: this.isThreadClosed
                }}
            >
                {this.props.children}
            </ThreadContext.Provider>
        )
    }
}

export default ThreadContextProvider;
