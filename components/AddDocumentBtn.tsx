import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const AddDocumentBtn = ({userId, email}: AddDocumentBtnProps) => {
  return (
    <Button>
      <Image src='/assets/icons/add/svg' alt='Add document' width={24} height={24}/>
    </Button>
  )
}

export default AddDocumentBtn
