'use client'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import { ReactNode } from "react";
const Provider = ({children}:{children:ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint={'/api/liveblock-auth'}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider 
