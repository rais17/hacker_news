import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-4'>
      {
        Array.from({ length: 8 }).map((element, index) => {
          return <div className="min-h-[154px] w-[calc(50%-16px)] space-y-2 py-4 px-4 rounded-md bg-white animate-pulse flex flex-col justify-center">
            <div className='h-2.5 bg-gray-100 rounded-md w-28'></div>

            <div className='h-2.5 bg-gray-100 rounded-md w-72'></div>

            <div className='w-56 h-2 bg-gray-100 rounded-md'></div>
          </div>;
        })
      }
    </div>
  )
}

export default Shimmer