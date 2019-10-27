import React from 'react';
import './App.scss';
import { CommentModel } from './Models/CommentModel';
import ThreadedCommentGroupWithContext from './Components/ThreadedCommentGroupWithContext/ThreadedCommentGroupWithContext';

const generateRandomNumber = (maxNumber: number): number => {
  return Math.floor((Math.random() * maxNumber) + 1);
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

const generateRandomComment = (parentId: string, depth: number): CommentModel => {
  return {
    parentId: parentId,
    id: generateRandomString(),
    depth: depth,
    author:  generateRandomString(),
    text: generateRandomText(generateRandomNumber(80)),
    createDate: "2018-10-14T20:50:00",
    replies: [] as CommentModel[]
  }
}

const createComments = (numOfReplies: number): CommentModel[] => {
  let testData = [] as CommentModel[];

  for (let i = 0; i < numOfReplies; i++) {
    const rootComment = generateRandomComment("", 0);

    const numOfReplies = generateRandomNumber(3);

    for (let j = 0; j < numOfReplies; j++) {
      const subComment = generateRandomComment(rootComment.id, rootComment.depth + 1);

      rootComment.replies.push(subComment);

      const numOfReplies = generateRandomNumber(3);

      for (let x = 0; x < numOfReplies; x++) {
        const subComment2 = generateRandomComment(subComment.id, subComment.depth + 1)

        subComment.replies.push(subComment2);

        const numOfReplies = generateRandomNumber(3);

        for (let y = 0; y < numOfReplies; y++) {
          const subComment3 = generateRandomComment(subComment2.id, subComment2.depth + 1);

          subComment2.replies.push(subComment3);

          const numOfReplies = generateRandomNumber(1);

          for (let z = 0; z < numOfReplies; z++) {
            const subComment4 = generateRandomComment(subComment3.id, subComment3.depth + 1);

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
//     depth: 0,
//     author:  generateRandomString(),
//     text: "1",
//     createDate: "2018-10-14T20:50:00",
//     replies: [
//       {
//         parentId: "1",
//         id: "2",
//         depth: 1,
//         author:  generateRandomString(),
//         text: "2",
//         createDate: "2018-10-14T20:50:00",
//         replies: [
//           {
//             parentId: "2",
//             id: "2a",
//             depth: 2,
//             author:  generateRandomString(),
//             text: "2a",
//             createDate: "2018-10-14T20:50:00",
//             replies: [] as CommentModel[]
//           },
//           {
//             parentId: "2",
//             id: "2b",
//             depth: 2,
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
      {/* TODO: Add ability to display more replies */}
      {/* TODO: Add ability to track number of children when thread is closed */}
      {/* TODO: Allow VoteButtons initial state to be set by props if comment has already been upvoted/downvoted by user */}
      {/* TODO: Add ability to highlight user if current logged in user was author */}
      {/* TODO: Add ability to enable and disable Threads */}
      {/* TODO: Add ability to enable and disable Actions */}
      {/* TODO: Re-organize folder structure and use dot notation to for unshareable components */}

      {
        testData.map((comment) =>
          <ThreadedCommentGroupWithContext
            key={comment.id}
            rootComment={comment}
          />
        )
      }
    </div>
  );
}

export default App;
