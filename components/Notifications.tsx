'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InboxNotification, InboxNotificationList, LiveblocksUIConfig } from "@liveblocks/react-ui";
import { useInboxNotifications, useUnreadInboxNotificationsCount } from "@liveblocks/react/suspense";
import Image from "next/image";
import { ReactNode } from "react";

const Notifications = () => {

    const {inboxNotifications} = useInboxNotifications()
    // const {count} = useUnreadInboxNotificationsCount()
    let count = 3
    const unreadNotifications = inboxNotifications.filter((notification)=> !notification.readAt)


  return (
    <Popover>
      <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-lg">
        <Image
        src='/assets/icons/bell.svg'
        width={24}
        height={24}
        alt="inbox"
        />
        {count > 0 && (<div className="absolute right-2 top-2 z-20 size-3 rounded-full bg-red-500"/>)}
      </PopoverTrigger>
      <PopoverContent align="end" className="shad-popover">
        <LiveblocksUIConfig overrides={{INBOX_NOTIFICATION_TEXT_MENTION: (user:ReactNode)=>(<>{user} mentioened you.</>)}}>
        
        <InboxNotificationList>
            {unreadNotifications.length < 0 && (<p className="py-2 text-center text-dark-500">No new notifications</p>)}
            {unreadNotifications.length > 0 && unreadNotifications.map((notification)=>(<InboxNotification
            key={notification.id}
            inboxNotification={notification}
            className="bg-dark-200 text-white"
            href={`/documents/${notification.roomId}`}
            showActions= {false}
            kinds={{
                thread: (props)=>(<InboxNotification.Thread {...props} showActions={false} showRoomName={false}/>),
                textMention: (props)=>(<InboxNotification.TextMention {...props} showRoomName={false}/>)
            }}
            />))}
        </InboxNotificationList>
        
        </LiveblocksUIConfig>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
