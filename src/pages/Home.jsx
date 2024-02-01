import React from 'react'

const trigger = () => { 
  console.log('triggered')
}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
       
      <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-4xl font-bold text-center text-slate-900'>Welcome to my portfolio</h1>
        <p className='text-xl font-medium text-center text-slate-900'>This is my first project using React</p>
      
      </div>
      
    </section>

  )
};

export default Home