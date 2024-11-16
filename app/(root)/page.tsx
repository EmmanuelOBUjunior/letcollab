import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getDocuments } from "@/lib/actions/room.actions";
import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const roomDocuments  = await getDocuments(clerkUser.emailAddresses[0].emailAddress)

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      <div>
        {roomDocuments.data.length > 0 ? (
          <div className="flex w-full">
             <div className="flex justify-between">
              <h3 className="text-28-semibold">All Documents</h3>
              <AddDocumentBtn userId={clerkUser.id} email={clerkUser.emailAddresses[0].emailAddress}/>
              </div> 
              <ul className="document-ul">

              </ul>
          </div>
        ) : (
          <div>
            <Image
              src="/assets/icons/doc.svg"
              width={40}
              height={40}
              alt="Document"
              className="mx-auto"
            />
            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
