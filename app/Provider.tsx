'use client'
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import { ReactNode } from "react";
const Provider = ({children}:{children:ReactNode}) => {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_PygIWMLt2YiQ5Nn_dqvIMlCw4ZPtcFCtSRbjQLcyYfZInhEQ9LxnMfRsWIZqi5v2"}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider 
