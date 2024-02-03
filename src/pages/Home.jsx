import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from 'three';
import Island from '../models/Island';

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas
       className='w-full h-screen bg-transparent'
      camera={{ near: 0.1, far: 1000, }} >
       <Suspense fallback={<Loader/>}>
        <directionalLight/>
        <ambientLight/>
        <spotLight/>
        <hemisphereLight/>
        <Island/>
       </Suspense>   
      

      </Canvas>


      
    </section>

  )
};

export default Home