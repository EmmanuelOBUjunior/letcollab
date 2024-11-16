import { useOthers } from "@liveblocks/react/suspense"

const ActiveCollaborators = () => {
    const others = useOthers()

    const collaborators = others.map((other)=>other.info)
  return (
    <ul className="collaborators-list">
      
    </ul>
  )
}

export default ActiveCollaborators
