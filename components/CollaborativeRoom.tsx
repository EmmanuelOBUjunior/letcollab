'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators';
import { useEffect, useRef, useState } from 'react';
// import { Input } from './ui/input';
import Image from 'next/image';
// import { updateDocument } from '@/lib/actions/room.actions';
import Loader from './Loader';
// import ShareModal from './ShareModal';

const CollaborativeRoom = ({ roomId, roomMetadata}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  // const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if(e.key === 'Enter') {
  //     setLoading(true);

  //     try {
  //       if(documentTitle !== roomMetadata.title) {
  //         const updatedDocument = await updateDocument(roomId, documentTitle);
          
  //         if(updatedDocument) {
  //           setEditing(false);
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if(containerRef.current && !containerRef.current.contains(e.target as Node)) {
  //       setEditing(false);
  //       updateDocument(roomId, documentTitle);
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }
  // }, [roomId, documentTitle])

  // useEffect(() => {
  //   if(editing && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [editing])
  

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
        <Editor/>
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom