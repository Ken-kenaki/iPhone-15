import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'

function App() {
  return (
    <main className='bg-black text-white'> 
    <Navigation />
    <Hero />
    <Highlights />
    </main>
  )
}

export default App