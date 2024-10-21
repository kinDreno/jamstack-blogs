
const Comments = () => {
  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold'>Comments:</h2>
      <ul>
        <li className='mb-4 bg-slate-300 p-2'>
        <section className='flex items-center mb-2'>
            <article className='text-slate-900 font-bold mr-2 '>John Doe</article>
            <article className='text-white'>10-November-2023</article>
        </section>
        <p>This is just an example.</p>
        </li>
      </ul>
      {/* Dynamic Routings Isn't built yet. */}
    </div>
  )
}

export default Comments
