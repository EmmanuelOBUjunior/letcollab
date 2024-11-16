import CollaborativeRoom from "@/components/CollaborativeRoom";
import { currentUser } from "@clerk/nextjs/server";

const Document = async({params:{id}}: SearchParamProps) => {
  const clerkUser = await currentUser()
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId= {id}/>
    </main>
  );
};

export default Document;
