import React from 'react';

type ThreadContext = {
    parentIdHovered: string | null;
    hoverThread: (parentId: string | null) => void;
    closeThread: (parentId: string) => void;
    isThreadClosed: (parentId: string) => boolean;
  };

export default React.createContext<ThreadContext>({
    parentIdHovered: null,
    hoverThread: () => {
        throw new Error('toggleParentIdHovered() not implemented');
    },
    closeThread: () => {
        throw new Error('closeThread() not implemented');
    },
    isThreadClosed: () => {
        throw new Error('isThreadClosed() not implemented');
    }
});
