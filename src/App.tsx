import React from 'react';
import './App.scss';
import ThreadedComment from './Components/ThreadedComment/ThreadedComment';

const App: React.FC = () => {
  return (
    <div style={{ height: "500px"}}>
      <ThreadedComment {...{ comment: { id: "abc-123", depth: 5 }}} />
      <ThreadedComment {...{ comment: { id: "abc-123", depth: 3 }}} />
      <ThreadedComment {...{ comment: { id: "abc-123", depth: 2 }}} />
    </div>
  );
}

export default App;
