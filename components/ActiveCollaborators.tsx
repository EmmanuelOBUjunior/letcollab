import { useOthers } from "@liveblocks/react/suspense"

const ActiveCollaborators = () => {
    const others = useOthers()
  return (
    <ul className="collaborators-list">
      
    </ul>
  )
}

export default ActiveCollaborators
