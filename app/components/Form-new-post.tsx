  'use client'
  import { ChangeEvent, FormEvent, useState } from 'react'
  import { FormData } from '../types/blog'
  
  const FormNewPost = () => {

    const [formData, setFormData] = useState<FormData>({
      title: '',
      content: '',
    })

  const handleChange = (e : 
    ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(formData)
  }
    return (
      <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit} action="text">
          <div className='mb-4'>
              <input type="text" className='duration-500 border-2 p-4 w-full border-slate-900 rounded-lg
              focus:ring'
              placeholder='Enter the Title' name='title' value={formData.title} 
              onChange={handleChange}
              />
          </div>

          <div className='mb-4'>

          <textarea 
    className=' resize-y border-2 p-4 w-full min-w-8 border-slate-900 rounded-lg focus:ring'
    placeholder='Enter the Content'
    name='content' value={formData.content} onChange={handleChange}
  />
          </div>
          <button type='submit' className='bg-slate-900 hover:bg-slate-700 font-bold w-full text-white p-4 rounded-md'>Submit</button>
      </form>
    )
  }

  export default FormNewPost
