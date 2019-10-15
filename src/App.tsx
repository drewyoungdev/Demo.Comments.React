import React from 'react';
import './App.scss';
import ThreadedCommentGroup from './Components/ThreadedCommentGroup/ThreadedCommentGroup';
import { CommentModel } from './Models/CommentModel';

// Comment Model should actually be recursive

// interface CommentModel {
//   id: string
//   depth: number
//   replies: CommentModel[]
// }

// This then needs to loop through each of the replies which may have their own replies (this assumes all replies are sorted)

// ThreadedCommentWithReplies


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
    replies: []
  }
]

const App: React.FC = () => {
  return (
    <div className="main-container">
      <ThreadedCommentGroup comments={testData}/>
      {/* {
        testData.map(() => <ThreadedCommentGroup comments={testData}/>)
      } */}
    </div>
  );
}

export default App;
