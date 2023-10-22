import React from 'react'
import CommentList from './CommentList'
import { convertDateToMonthAndYear } from '../Utils/Slices/helperFunction';

const CommentContainer = ({comment}) => {
  return (
    <div className="w-full space-y-5">
      <div className='w-full'>
        <h1 className="text-xl font-semibold font-Mullish">{comment.title}</h1>
        <p className="text-xs font-light font-Mullish">
          {comment.points} points by {comment.author} on{" "}
          {convertDateToMonthAndYear(comment.created_at)}
        </p>
      </div>

      <CommentList commentList={comment.children} />
    </div>
  );
}

export default CommentContainer