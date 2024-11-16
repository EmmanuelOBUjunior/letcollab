import { useThreads } from '@liveblocks/react/suspense'
import React from 'react'

const Comments = () => {
    const {threads} = useThreads()
  return (
    <div className='comments-container'>
      
    </div>
  )
}

export default Comments
