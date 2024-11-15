import Image from "next/image"

const Loader = () => {
  return (
    <div className="loader">
      <Image
      alt="loader"
      src='/assets/icons/loader.svg'
      width={32}
      height={32}
      className="animate-spin"
      />
    </div>
  )
}

export default Loader
