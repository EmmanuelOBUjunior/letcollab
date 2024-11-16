import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/Header";
import { getDocuments } from "@/lib/actions/room.actions";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
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
          <div className="document-list-container">
             <div className="document-list-title">
              <h3 className="text-28-semibold">All Documents</h3>
              <AddDocumentBtn userId={clerkUser.id} email={clerkUser.emailAddresses[0].emailAddress}/>
              </div> 
              <ul className="document-ul">
                {roomDocuments.data.map(({id, metadata, createdAt}:any)=>(
                  <li key={id} className="document-list-item">
                    <Link href={`/documents/${id}`} className="flex flex-1 items-center gap-4">
                      <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                        <Image src='/assets/icons/doc.svg' width={40} height={40} alt="file"/>
                      </div>
                      <div className="space-y-1">
                        <p>{metadata.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
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
