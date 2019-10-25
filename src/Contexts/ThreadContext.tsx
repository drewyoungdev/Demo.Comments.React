import React from 'react';

type ThreadContext = {
    parentIdHovered: string | null;
    toggleParentIdHovered: (parentId: string | null) => void;
  };

export default React.createContext<ThreadContext>({
    parentIdHovered: null,
    toggleParentIdHovered: (n) => {
        throw new Error('toggleParentIdHovered() not implemented');
    }
});
