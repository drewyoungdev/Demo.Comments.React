import React from 'react';

type ThreadHoveredContext = {
    parentIdHovered: string | null;
    toggleParentIdHovered: (parentId: string | null) => void;
  };

export default React.createContext<ThreadHoveredContext>({
    parentIdHovered: null,
    toggleParentIdHovered: (n) => {
        throw new Error('toggleParentIdHovered() not implemented');
    }
});
