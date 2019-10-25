import React from 'react';
import { Component } from "react";import ThreadContext from './ThreadContext';

type ThreadState = {
    parentIdHovered: string | null;
}

class ThreadContextProvider extends Component<{}, ThreadState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            parentIdHovered: null
        }
    }

    toggleParentIdHovered = (parentId: string | null) => {
        this.setState({ parentIdHovered: parentId})
    }

    render () {
        return(
            <ThreadContext.Provider
                value={{
                    parentIdHovered: this.state.parentIdHovered,
                    toggleParentIdHovered: this.toggleParentIdHovered
                }}
            >
                {this.props.children}
            </ThreadContext.Provider>
        )
    }
}

export default ThreadContextProvider;
