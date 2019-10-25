import React from 'react';

type ThreadClickContext = {
    closeThread: (parentId: string) => void;
    isThreadClosed: (parentId: string) => boolean;
  };

export default React.createContext<ThreadClickContext>({
    closeThread: () => {
        throw new Error('closeThread() not implemented');
    },
    isThreadClosed: () => {
        throw new Error('isThreadClosed() not implemented');
    }
});
