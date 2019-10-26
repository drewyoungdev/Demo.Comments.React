import React from 'react';
import { Component } from "react";
import ThreadHoverContext from './ThreadHoverContext';

type ThreadHoverState = {
    parentIdHovered: string | null;
}

class ThreadHoverContextProvider extends Component<{}, ThreadHoverState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            parentIdHovered: null
        }
    }

    hoverThread = (parentId: string | null) => {
        // console.log(parentId);
        this.setState({ parentIdHovered: parentId})
    }

    render () {
        return(
            <ThreadHoverContext.Provider
                value={{
                    parentIdHovered: this.state.parentIdHovered,
                    hoverThread: this.hoverThread
                }}
            >
                {this.props.children}
            </ThreadHoverContext.Provider>
        )
    }
}

export default ThreadHoverContextProvider;
