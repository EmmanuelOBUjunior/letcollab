import { useState } from "react"

const Collaborator = ({roomId, creatorId, email, collaborator, user}: CollaboratorProps) => {
    const [loading, setLoading] = useState(false)
    const [userType, setUserType] = useState(collaborator.userType || 'viewer')
  return (
    <div>
      collaborator
    </div>
  )
}

export default Collaborator
