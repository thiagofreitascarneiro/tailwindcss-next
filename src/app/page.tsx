import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 h-screen flex flex-col items-center text-center'>
      <div className='max-w-2xl'>
        <h1 className='font-bold text-3xl flex sm:text-5xl lg:text-5xl'>
        Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className='mt-4 dark:text-slate-400'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
        <button className='bg-sky-500 px-2 py-2 dark:bg-sky-400 dark:text-sky-950 text-white rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed '>
          sign in
        </button>
      </div>
     
    </div>
    
  )
}
