import React from 'react';
import './App.scss';
import ThreadedCommentGroup from './Components/ThreadedCommentGroup/ThreadedCommentGroup';
import { CommentModel } from './Models/CommentModel';

const testData: CommentModel[] = [
  {
    id: "abc-123",
    depth: 5
  },
  {
    id: "abc-456",
    depth: 4
  },
  {
    id: "abc-789",
    depth: 3
  },
  {
    id: "abc-111",
    depth: 2
  }
]

const App: React.FC = () => {
  return (
    <div className="main-container">
      <ThreadedCommentGroup comments={testData}/>
      <ThreadedCommentGroup comments={testData}/>
    </div>
  );
}

export default App;
