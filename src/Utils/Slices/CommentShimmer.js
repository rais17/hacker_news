import React from 'react'

const CommentShimmer = () => {
  return (
      <div className='max-w-4xl px-4 py-10 mx-auto'>
          {
              Array.from({ length: 6 }).map((el, index) => {
                  return <div className='w-full py-4 space-y-4 animate-pulse'>
                      
                      <div className='w-3/4 space-y-2'>
                          <div className='w-full h-2.5 bg-gray-200 rounded-md'></div>
                          <div className='w-1/3 h-2 bg-gray-200 rounded-md'></div>
                          <div className='w-2/4 h-2.5 bg-gray-200 rounded-md'></div>
                      </div>

                      <div className='w-full pl-10 space-y-2'>
                          <div className='w-1/3 h-2.5 bg-gray-200 rounded-md'></div>
                          <div className='w-1/2 h-2.5 bg-gray-200 rounded-md'></div>
                      </div>

                      <div className='w-1/2 space-y-2'>
                          <div className='w-2/3 h-2 bg-gray-200 rounded-md'></div>
                          <div className='w-1/3 h-2.5 bg-gray-200 rounded-md'></div>
                      </div>

                  </div>
              })
          }
    </div>
  )
}

export default CommentShimmer