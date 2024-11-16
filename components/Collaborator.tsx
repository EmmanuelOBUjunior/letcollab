import { useState } from "react"

const Collaborator = ({roomId, creatorId, email, collaborator, user}: CollaboratorProps) => {
    const [loading, setLoading] = useState(false)
    const [userType, setUserType] = useState(collaborator.userType || 'viewer')
    
    const shareDocumentHandler = async(type:string) => {}
    const removeCollaboratorHandler = async(email:string) => {}

  return (
    <div>
      collaborator
    </div>
  )
}

export default Collaborator
  