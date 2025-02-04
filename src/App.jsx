import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Model from './Components/Model'

import * as Sentry from "@sentry/react";

function App() {

  return (
    <main className='bg-black text-white'> 
    <Navigation />
    <Hero />
    <Highlights />
    <Model />
    </main>
  )
}

export default Sentry.withProfiler(App);