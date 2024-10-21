'use client'
import React, { ChangeEvent, useState } from 'react'

const FormComments = () => {
    const [comment, setComment] = useState<string>("");
    
    const handleCommentChange = (e : ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleSubmitComment = () => {
        console.log(comment)
    }

  return (
    <>
    <div className='mt-4'>
        <label htmlFor="comments" 
        className='block text-gray-700 text-sm font-bold mb-2'
        >
            Add Comment
        </label>
        <input type="text" className='w-full py-2 px-3 border border-x-gray-300 rounded-md focus:outline-none
        focus:ring focus:border-blue-300
        ' name='comment'
        value={comment}
        onChange={handleCommentChange}
         />
         <button onClick={handleSubmitComment} className='bg-slate-900 hover:bg-blue-950 text-white font-bold py-2 px-4
         rounded-md mt-2 disabled:bg-gray-400
         '>Submit Comment</button>
    </div>
    </>
  )
}

export default FormComments
