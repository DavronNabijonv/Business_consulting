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
      <div className="space-y-10 max-w-280 w-full mx-auto flex items-start gap-15 ">
        <p className="text-white text-3xl font-semibold">What We Offer</p>
        <div className="space-y-2" >
          {offers.map((item) => (
            <p key={item} className="text-white text-7xl">{item}</p>
          ))}
          <p className="text-white opacity-50 text-7xl mb-20">+More</p>
          <Link href="/service" className=" bg-white text-black text-xl px-6 py-3 tracking-[2px] rounded-full">
            Service
          </Link>
        </div>
      </div>
    </div>
  );
}
