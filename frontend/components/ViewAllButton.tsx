import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


const ViewAllButton = () => {
  return (
<div className="mt-8 flex w-full justify-center sm:mt-10">
  <Link
    href="/collections/best-sellers"
    className="
      group inline-flex items-center
      border-b border-foreground/60
      pb-1.5
      text-[11px] sm:text-xs
      font-medium uppercase
      tracking-[0.2em]
      text-foreground
      transition-colors duration-300
      hover:border-foreground
    "
  >
    View All

    <FaArrowRightLong
      className="
        ml-2 text-xs
        transition-transform duration-300
        ease-out
        group-hover:translate-x-1
      "
    />
  </Link>
</div>
  )
}

export default ViewAllButton
