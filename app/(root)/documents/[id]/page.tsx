import CollaborativeRoom from "@/components/CollaborativeRoom";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async({params:{id}}: SearchParamProps) => {
  const clerkUser = await currentUser()
  if(!clerkUser) redirect('/sign-in')
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId= {id}/>
    </main>
  );
};

export default Document;
