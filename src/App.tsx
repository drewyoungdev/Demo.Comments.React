import React from 'react';
import './App.scss';
import ThreadedCommentGroup from './Components/ThreadedCommentGroup/ThreadedCommentGroup';
import { CommentModel } from './Models/CommentModel';

const testData: CommentModel[] = [
  {
    id: "abc-456",
    depth: 0,
    author: "user1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
    replies: [
      {
        id: "cdf-234",
        depth: 1,
        author: "user1",
        text: "Hello world",
        replies: [
          {
            id: "",
            depth: 2,
            author: "user1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
            replies: [
              {
                id: "",
                depth: 3,
                author: "user1",
                text: "Hello world",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "abc-123",
    depth: 0,
    author: "user1",
    text: "Hello world",
    replies: [
      {
        id: "",
        depth: 1,
        author: "user1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
        replies: []
      }
    ]
  },
  {
    id: "abc-789",
    depth: 0,
    author: "user1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
    replies: []
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
