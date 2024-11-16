import Image from "next/image"
import { useState } from "react"

const Collaborator = ({roomId, creatorId, email, collaborator, user}: CollaboratorProps) => {
    const [loading, setLoading] = useState(false)
    const [userType, setUserType] = useState(collaborator.userType || 'viewer')
    
    const shareDocumentHandler = async(type:string) => {}
    const removeCollaboratorHandler = async(email:string) => {}

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        <Image
        src={collaborator.avatar}
        alt={collaborator.name}
        width= {36}
        height={36}
        className="size-9 rounded-full"
        />
      </div>
    </li>
  )
}

export default Collaborator