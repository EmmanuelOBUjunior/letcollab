import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="header">
      <Link href='/'>
      <Image
      alt="Logo with name"
      src='/assets/icons/logo.svg'
      className="hidden md:block"
      width={120}
      height={32}
      />
      <Image
      alt="Logo with name"
      src='/assets/icons/logo-icon.svg'
      className="mr-2 md:hidden"
      width={120}
      height={32}
      />
      </Link>
    </div>
  )
}

export default Header
