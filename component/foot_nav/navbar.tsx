"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function Navbar() {
  const page = useSearchParams();
  const bgColor = "";
  return (
    <div className="bg-[#0D1F08] font-poppins py-5">
      <div className="max-w-350 w-full mx-auto flex items-center justify-between ">
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
