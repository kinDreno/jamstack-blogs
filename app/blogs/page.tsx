import React from 'react'
import { posts } from '../data/posts'
import Link from 'next/link'
const BlogsPage = () => {
  return (
   <>
   <div className='max-w-4xl mx-auto py-8'>
    <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
    <article className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4'>
    {posts.map((post) => {
        return <Link key={post.id} className='p-3 h-full w-full rounded-md shadow-lg' href={`/blogs/${post.id}`}>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p>Written by: {post.username}</p>
        </Link>
    })}
    </article>
   </div>
   </>
  )
}

export default BlogsPage
