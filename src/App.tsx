import React from 'react';
import './App.scss';
import { CommentModel } from './Models/CommentModel';
import ThreadedCommentRoot from './Components/ThreadedCommentRoot/ThreadedCommentRoot';

const generateRandomNumber = (maxNumber: number, includeZero?: boolean): number => {
  if (includeZero === undefined || !includeZero) {
    return Math.floor((Math.random() * maxNumber) + 1);
  }

  return Math.floor((Math.random() * maxNumber));
}

const generateRandomString = (): string => {
  return Math.random().toString(36).substring(7);
}

const generateRandomText = (numOfWords: number): string => {
  var words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less","." ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story","." ,"It", "was", "a pleasure", "to", "burn"];
  var text = [];
  var x = numOfWords;
  while(--x) text.push(words[Math.floor(Math.random() * words.length) + 1]);
  return text.join(" ");
}

const generateRandomComment = (parentId: string): CommentModel => {
  return {
    parentId: parentId,
    id: generateRandomString(),
    author:  generateRandomString(),
    text: generateRandomText(generateRandomNumber(80)),
    createDate: "2018-10-14T20:50:00",
    replies: [] as CommentModel[],
    numOfHiddenReplies: generateRandomNumber(4, true)
  }
}

const createComments = (numOfReplies: number): CommentModel[] => {
  let testData = [] as CommentModel[];

  for (let i = 0; i < numOfReplies; i++) {
    const rootComment = generateRandomComment("");

    const numOfReplies = generateRandomNumber(3);

    for (let j = 0; j < numOfReplies; j++) {
      const subComment = generateRandomComment(rootComment.id);

      rootComment.replies.push(subComment);

      const numOfReplies = generateRandomNumber(3);

      for (let x = 0; x < numOfReplies; x++) {
        const subComment2 = generateRandomComment(subComment.id)

        subComment.replies.push(subComment2);

        const numOfReplies = generateRandomNumber(3);

        for (let y = 0; y < numOfReplies; y++) {
          const subComment3 = generateRandomComment(subComment2.id);

          subComment2.replies.push(subComment3);

          const numOfReplies = generateRandomNumber(1);

          for (let z = 0; z < numOfReplies; z++) {
            const subComment4 = generateRandomComment(subComment3.id);

            subComment3.replies.push(subComment4);
          }
        }
      }
    }

    testData.push(rootComment);
  }

  return testData;
}

const testData = createComments(1);

// const testData = [
//   {
//     parentId: "",
//     id: "1",
//     author:  generateRandomString(),
//     text: "1",
//     createDate: "2018-10-14T20:50:00",
//     replies: [
//       {
//         parentId: "1",
//         id: "2",
//         author:  generateRandomString(),
//         text: "2",
//         createDate: "2018-10-14T20:50:00",
//         replies: [
//           {
//             parentId: "2",
//             id: "2a",
//             author:  generateRandomString(),
//             text: "2a",
//             createDate: "2018-10-14T20:50:00",
//             replies: [] as CommentModel[]
//           },
//           {
//             parentId: "2",
//             id: "2b",
//             author:  generateRandomString(),
//             text: "2b",
//             createDate: "2018-10-14T20:50:00",
//             replies: [] as CommentModel[]
//           }
//         ] as CommentModel[]
//       }
//     ]
//   }
// ]

const App: React.FC = () => {
  return (
    <div className="main-container">
      {/* Functionality TODOS */}
      {/* Add ability to track number of children when thread is closed */}

      {/* Styling TODOS */}
      {/* Fix ReplyBox styling */}

      {/* Refactor TODOS */}
      {/* Make 'hidden' a global style */}

      {/* User Login TODOS */}
      {/* Allow VoteButtons initial state to be set by props if comment has already been upvoted/downvoted by user */}
      {/* Add ability to highlight user if current logged in user was author */}

      {/* Package Consumer TODOS */}
      {/* Make alternative design to mimic Facebook */}
      {/* Re-organize folder structure and use dot notation to for unshareable components */}

      {
        testData.map((comment) =>
          <ThreadedCommentRoot
            key={comment.id}
            rootComment={comment}
          />
        )
      }
    </div>
  );
}

export default App;
