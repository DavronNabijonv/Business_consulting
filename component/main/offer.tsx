import Link from "next/link";

export function Offer() {
  const offers = [
    "Business formation",
    "Contract drafting",
    "Mergers and Acquisitions",
    "Property Protection",
    "Employment Law",
    "Corporate Governance",
    "Shareholder Disputes",
  ];
  return (
    <div className="bg-[#0D1F08] py-20">
      <div className=" min-[850px]:space-y-10 max-w-280 w-full min-[850px]:px-2 px-5 mx-auto flex min-[850px]:flex-row flex-col items-start gap-15 ">
        <p className="text-white text-3xl font-semibold">What We Offer</p>
        <div className="space-y-2">
          {offers.map((item) => (
            <p
              key={item}
              className="text-white min-[1200px]:text-7xl lg:text-6xl sm:text-5xl text-3xl max-[390px]:text-2xl"
            >
              {item}
            </p>
          ))}
          <p className="text-white opacity-50 min-[1200px]:text-7xl lg:text-6xl sm:text-5xl text-3xl max-[390px]:text-2xl sm:mb-20 mb-10">
            +More
          </p>
          <Link
            href="/service"
            className=" bg-white text-black text-xl px-6 py-3 tracking-[2px] rounded-full"
          >
            Service
          </Link>
        </div>
      </div>
    </div>
  );
}
