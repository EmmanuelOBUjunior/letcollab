import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Home = () => {
  const documents = [];
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-2">
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      <div>
        {documents.length > 0 ? (
          <div></div>
        ) : (
          <div>
            <Image
              src="/assets/icons/doc.svg"
              width={40}
              height={40}
              alt="Document"
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
