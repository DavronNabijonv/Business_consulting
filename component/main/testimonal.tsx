import Image from "next/image";
import Link from "next/link";
import { TestimonialSlider } from "./testimonalSlider/slider";

export function Testimonal() {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:gap-10 gap-5 md:py-30 py-20 max-[450px]:py-10 bg-white text-center text-black ">
        {/* header */}
        <p className="sm:text-4xl text-3xl max-[350px]:text-2xl font-medium">Hear From Our Clients</p>
        <p className="max-w-120 w-full mx-auto text-lg max-sm:px-3 ">
          We believe that our clients' experiences speak volumes about the
          quality of our legal services. Here's what some of them have to say:
        </p>

        {/* slider */}
        <div className="bg-[#f6f6f6]">
          <TestimonialSlider />
        </div>

        {/* bottom */}
        <p className="max-w-100 w-full mx-auto text-lg">
          Let us help you navigate your legal journey with confidence and peace
          of mind. Contact Jones & Brown Legal today.
        </p>
        <Link
          href="/schedule"
          className="text-white bg-[#31110f] px-6 py-3 rounded-full text-xl"
        >
          Schedule a Cunsult
        </Link>
      </div>

      <div className="relative w-full h-screen">
        <Image
          src="/home/image3.png"
          alt="divider Image"
          fill
          priority
          className="w-full h-screen object-cover"
        />
      </div>
    </>
  );
}
