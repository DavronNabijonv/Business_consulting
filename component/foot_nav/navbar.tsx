"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const page = usePathname();
  const bgColor =
    page === "/service"
      ? "bg-[#0D1F08]"
      : page === "/schedule"
        ? "bg-[#1f0808]"
        : "bg-[#080a1f]";
  console.log("current page: ", page);
  return (
    <div className={`font-poppins py-5 fixed top-0 left-0 w-full z-20 ${bgColor}`}>
      <div className="max-w-350 w-full mx-auto px-2 flex items-center justify-between ">
        <Link href="/">
          <Image src="/Logo.png" alt="logo image" width={30} height={20} />
        </Link>
        <div className="flex items-center gap-6 text-lg">
          <Link href="/service">Services</Link>
          <Link href="/schedule">Schedule a Consult</Link>
        </div>
      </div>
    </div>
  );
}
