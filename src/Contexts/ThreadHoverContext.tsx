import React from 'react';

type ThreadHoverContext = {
    parentIdHovered: string | null;
    hoverThread: (parentId: string | null) => void;
  };

export default React.createContext<ThreadHoverContext>({
    parentIdHovered: null,
    hoverThread: () => {
        throw new Error('hoverThread() not implemented');
    }
});
