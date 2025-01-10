import Link from "next/link"
import Image from "next/image"
import AirLogo from "@/public/images/air.svg"

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="AirLogo">
      <Image
        className="max-w-none"
        src={AirLogo}
        width={38}
        height={38}
        priority
        alt="Air Logo"
      />
    </Link>
  )
}
