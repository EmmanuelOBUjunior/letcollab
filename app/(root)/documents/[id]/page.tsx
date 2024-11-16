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
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId={id} roomMetadata={roomMetadata} />
    </main>
  );
};

export default Document;
