import React, { useState } from 'react';
import './App.scss';
import ThreadedComment from './Components/ThreadedComment/ThreadedComment';

const App: React.FC = () => {
  const [depthHovered, setDepthHovered] = useState<number | null>(null);

  return (
    <div style={{ height: "500px"}}>
      <ThreadedComment
        {
          ...{
            comment: { id: "abc-123", depth: 5 },
            depthHovered: depthHovered,
            onThreadHover: (depthHovered) => {
              setDepthHovered(depthHovered);
            }
          }
        }
      />
      <ThreadedComment
        {
          ...{
            comment: { id: "abc-456", depth: 4 },
            depthHovered: depthHovered,
            onThreadHover: (depthHovered) => {
              setDepthHovered(depthHovered);
            }
          }
        }
      />
      <ThreadedComment
      {
        ...{
          comment: { id: "abc-789", depth: 3 },
          depthHovered: depthHovered,
          onThreadHover: (depthHovered) => {
            setDepthHovered(depthHovered);
          }
        }
      }
    />
    </div>
  );
}

export default App;
