import React from 'react';
import './App.scss';
import ThreadedCommentGroup from './Components/ThreadedCommentGroup/ThreadedCommentGroup';
import { CommentModel } from './Models/CommentModel';

const testData: CommentModel[] = [
  {
    id: "abc-456",
    depth: 0,
    replies: [
      {
        id: "",
        depth: 1,
        replies: [
          {
            id: "",
            depth: 2,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "abc-123",
    depth: 0,
    replies: [
      {
        id: "",
        depth: 1,
        replies: []
      }
    ]
  },
  {
    id: "abc-789",
    depth: 0,
    replies: []
  },
  {
    id: "abc-111",
    depth: 0,
    replies: [
      {
        id: "",
        depth: 1,
        replies: []
      }
    ]
  }
]

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* TODO: Add ability to enable and disable threads */}
      {
        testData.map((comment) =>
          <ThreadedCommentGroup
            rootComment={comment}
            replies={comment.replies}
          />
        )
      }
    </div>
  );
}

export default App;
