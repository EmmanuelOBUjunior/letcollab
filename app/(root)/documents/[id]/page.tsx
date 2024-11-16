import CollaborativeRoom from "@/components/CollaborativeRoom";
import { useParams } from "next/navigation";

const Document = ({params:{id}}: SearchParamProps) => {
  console.log(id)
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId= {id}/>
    </main>
  );
};

export default Document;
