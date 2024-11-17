'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Image
        src='/assets/icons/bell.svg'
        width={24}
        height={24}
        alt="inbox"
        />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default Notifications;
