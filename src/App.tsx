import React from 'react';
import './App.scss';
import ThreadedCommentGroup from './Components/ThreadedCommentGroup/ThreadedCommentGroup';
import { CommentModel } from './Models/CommentModel';

const testData: CommentModel[] = [
  {
    parentId: "",
    id: "abc-456",
    depth: 0,
    author: "user1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
    replies: [
      {
        parentId: "abc-456",
        id: "cdf-234",
        depth: 1,
        author: "user1",
        text: "Hello world",
        replies: [
          {
            parentId: "cdf-234",
            id: "543-cds",
            depth: 2,
            author: "user1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
            replies: [
              {
                parentId: "543-cds",
                id: "90dfss-2",
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
    parentId: "",
    id: "abc-123",
    depth: 0,
    author: "user1",
    text: "Hello world",
    replies: [
      {
        parentId: "abc-123",
        id: "444-32a",
        depth: 1,
        author: "user1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor risus sit amet neque fringilla, vitae ultrices libero egestas.",
        replies: []
      }
    ]
  },
  {
    parentId: "",
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
        testData.map((comment, idx) =>
          <ThreadedCommentGroup
            key={idx}
            rootComment={comment}
            replies={comment.replies}
            parentIdBreadcrumbs={[comment.id]}
          />
        )
      }
    </div>
  );
}

export default App;
