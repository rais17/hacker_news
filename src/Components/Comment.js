import React from 'react'
import he from "he"
import { convert } from 'html-to-text';
import { convertDateToMonthAndYear } from '../Utils/Slices/helperFunction';


const Comment = ({ text, author,created_at }) => {

  return (
    <div className="w-full">
      <p className="text-xs italic font-normal text-gray-600 font-Mullish">
        by {author} on {convertDateToMonthAndYear(created_at)}
      </p>
      <p className="text-sm font-medium whitespace-pre-line font-Mullish">
        {convert(he.decode(text), { wordwrap: 120 })}
      </p>
    </div>
  );
}

export default Comment