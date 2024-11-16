'use client'

import { useSelf } from "@liveblocks/react/suspense"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const ShareModal = ({roomId, collaborators, creatorId, currentUserType}: ShareDocumentDialogProps) => {
    const user = useSelf()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [userType, setUserType] = useState<UserType>('viewer')

    const shareDocumentHandler = async()=>{

    }

  return (
    <div>
      Share Modal
    </div>
  )
}

export default ShareModal
