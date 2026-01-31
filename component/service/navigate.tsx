import Image from "next/image";

const SERVICES = [
  {
    id: 1,
    title: "Business and Corporate Law",
    desc: `Business formation (LLCs, corporations, partnerships)
           Contract drafting and review
           Mergers and acquisitions
           Intellectual property protection
           Employment law and workplace policies
           Corporate governance
           Shareholder and partnership disputes`,
  },
  {
    id: 2,
    title: "Litigation and Dispute Resolution",
    desc: `Civil litigation
           Commercial litigation
           Arbitration and mediation
           Class action lawsuits
           Personal injury claims
           Product liability cases`,
  },
  {
    id: 3,
    title: "Family Law",
    desc: `Divorce and separation
           Child custody and support
           Prenuptial and postnuptial agreements
           Adoption and surrogacy
           Domestic violence protection`,
  },
  {
    id: 4,
    title: "Criminal Defense",
    desc: `DUI and traffic offenses
          White-collar crime defense
          Drug charges
          Assault and battery cases
          Expungements and record sealing`,
  },
  {
    id: 5,
    title: "Real Estate Law",
    desc: `Property transactions (buying, selling, leasing)
          Landlord-tenant disputes
          Zoning and land use
          Construction law
          Real estate development`,
  },
  {
    id: 6,
    title: "Immigration Law",
    desc: `Visa applications
          Green cards and citizenship
          Deportation defense
          Employment-based immigration`,
  },
];

export function Navigate() {
  return (
    <>
      <div className="bg-[#0D1F08] py-20">
        <div className="max-w-300 w-full mx-auto space-y-15 ">
          <div className="text-white text-3xl max-w-130 w-full">
            Navigating Complex Legal Landscapes? We Can Help.
          </div>
          <div className="border-b border-white space-y-10 pb-15">
            {SERVICES.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 border-t border-white pt-5 sm:pr-20"
              >
                <p className="text-xl">{item.title}</p>
                <p className="max-w-80 w-full">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[80vh]">
        <Image
          src="/service/image.png"
          alt="divider Image"
          fill
          priority
          className="w-full h-screen object-cover"
        />
      </div>
    </>
  );
}
