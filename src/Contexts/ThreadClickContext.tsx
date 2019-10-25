import React from 'react';

type ThreadClickContext = {
    openThread: (parentId: string) => void;
    closeThread: (parentId: string) => void;
    isThreadClosed: (parentId: string) => boolean;
  };

export default React.createContext<ThreadClickContext>({
    openThread: () => {
        throw new Error('openThread() not implemented');
    },
    closeThread: () => {
        throw new Error('closeThread() not implemented');
    },
    isThreadClosed: () => {
        throw new Error('isThreadClosed() not implemented');
    }
});
