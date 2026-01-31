import Image from "next/image";
import Link from "next/link";

export function Welcome() {
  return (
    <>
      <div className="bg-[#f7f4eb] py-30 ">
        <div className="space-y-10 max-w-300 w-full mx-auto">
          <p className="text-black text-3xl">Welcome to Jones & Brown Legal</p>
          <div className="flex items-start gap-4">
            <p className="text-black text-lg max-w-125 w-full">
              Jones & Brown Legal has been a pillar of the Los Angeles legal
              community, providing expert legal counsel across a wide spectrum
              of practice areas. We are more than just attorneys, we are trusted
              advisors, dedicated advocates, and strategic partners committed to
              achieving the best possible outcomes for our clients.
            </p>
            <p className="text-black text-lg max-w-126 w-full">
              We combine decades of experience with a deep understanding of the
              complexities of California law. Our team of seasoned trial
              attorneys boasts a proven track record of success in courtrooms
              throughout Los Angeles and beyond. We pride ourselves on our
              comprehensive expertise, covering nearly every field of law,
              ensuring that whatever your legal challenge, we have the knowledge
              and experience to guide you.
            </p>
          </div>
          <Link
            href="/schedule"
            className="text-white bg-[#31110f] px-6 py-3 rounded-full text-xl"
          >
            Schedule a Cunsult
          </Link>
        </div>
      </div>
      <div className="relative w-full h-screen">
        <Image
          src="/home/image2.png"
          alt="divider Image"
          fill
          priority
          className="w-full h-screen object-cover"
        />
      </div>
    </>
  );
}
