"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "./Loader";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import ActiveCollaborators from "./ActiveCollaborators";
import { useRef, useState } from "react";
import { Input } from "./ui/input";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = (e: KeyboardEvent)=>{

  }

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header className="">
            <div ref ={containerRef} className="flex w-fit items-center justify-center gap-2">
              {editing && !loading ? (
                <Input type="text" value={documentTitle} onChange={(e)=> setDocumentTitle(e.target.value)} ref={inputRef} placeholder= "Enter title" onKeyDown={updateTitleHandler} />
              ) : (
                <>
                  <p className="document-title">{documentTitle}</p>
                </>
              )}
            </div>
            <div className="flex w-fit items-center justify-center gap-2">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
