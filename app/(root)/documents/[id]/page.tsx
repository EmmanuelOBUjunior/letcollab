import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocuments } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const room = getDocuments({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
 
  //TODO: Access the permissions of the user to access the document

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  );
};

export default Document;
