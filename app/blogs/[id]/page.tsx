import Comments from "@/app/components/comments"
import FormComments from "@/app/components/form-comments"
const BlogDetailPage = () => {
  return (
    <>
    <main className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold'>Post One</h1>
        <p>Written by: John Doe</p>
        <section className='mt-4'>
            contenthjahsd
        </section>
        
        <FormComments />
        <Comments />
        </main>
    </>
  )
}

export default BlogDetailPage
