import React from 'react'
import { convertDateToMonthAndYear } from '../Utils/Slices/helperFunction';

const NewsCard = ({ title, created_at, author, num_comments, objectID }) => {
  return (
    <div className="w-full px-4 py-2 bg-white min-h-[154px] rounded-md">
      <div className="flex items-center gap-1">
        <span className="text-sm font-light font-Mullish">by</span>
        <h1 className="font-Mullish text-base font-normal text-[#222222] first-letter:capitalize border-b-2 border-gray-300">
          {author}
        </h1>
      </div>
      <h1 className="font-Mullish text-2xl font-normal leading-6 text-[#222222] mt-4">
        {title}
      </h1>

      <div className="flex flex-wrap items-center w-full mt-1 gap-x-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-light font-Mullish">created_at </span>
          <h1 className='text-sm font-Mullish'>{convertDateToMonthAndYear(created_at)}</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-light font-Mullish">comments </span>
          <h1 className='text-sm font-Mullish'>{num_comments}</h1>
        </div>
      </div>
    </div>
  );
};

export default NewsCard