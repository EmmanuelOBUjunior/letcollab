import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

const ActiveCollaborators = () => {
  const others = useOthers();

  const collaborators = others.map((other) => other.info);
  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id}>
          <Image
            src={avatar}
            height={100}
            width={100}
            alt={name}
            className="inline-block size-8 rounded-full ring-2 ring-dark-100"
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
