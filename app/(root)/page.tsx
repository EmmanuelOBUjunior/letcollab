import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <Button>Create Blank Document</Button>
      </Header>
    </main>
  )
}

export default Home
