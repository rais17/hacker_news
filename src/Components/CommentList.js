import Comment from "./Comment";
import React from "react";

const CommentList = ({ commentList }) => {
  return (
    <>
      {commentList.map((comment) => {
        return (
          <div className="w-full space-y-5" key={comment.id}>
            <Comment {...comment} />

            <div className="pl-8">
              <CommentList commentList={comment.children} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentList;
