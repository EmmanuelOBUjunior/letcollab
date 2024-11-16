import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/'>
      <Image
      alt="Logo with name"
      src='/assets/icons/logo.svg'
      className="hidden md:block"
      width={120}
      height={32}
      />
      <Image
      alt="Logo without name"
      src='/assets/icons/logo-icon.svg'
      className="mr-2 md:hidden"
      width={32}
      height={32}
      />
      </Link>
      {children}
    </div>
  )
}

export default Header
