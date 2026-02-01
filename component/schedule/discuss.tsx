const DISCUSS = [
  {
    id: 1,
    title: "Free consultation",
    desc: `Schedule a complimentary consultation to 
    discuss your legal needs. During this session, our 
    experienced attorneys will assess your situation, 
    provide initial guidance, and outline potential strategies.`,
  },
  {
    id: 2,
    title: "Personalized Case Evaluation",
    desc: `If you choose to move forward, we conduct a detailed 
    review of your case. This includes gathering key documents, 
    outlining your legal options, and developing a tailored 
    plan designed to achieve the best possible outcome.`,
  },
  {
    id: 3,
    title: "Formal Engagement & Representation",
    desc: `Once you decide to proceed, we finalize the paperwork 
    and begin representing you. Our team will keep you informed 
    at every stage, ensuring you feel confident and supported 
    throughout the process.`,
  },
];

export function Discuss() {
  return (
    <div className="bg-[#1f0808] py-30 text-white">
      <div className="max-w-300 w-full mx-auto">
        <p className="text-3xl">Ready to Take the Next Step? </p>
        <p className="text-3xl">Let's Discuss</p>
        <div className="w-full bg-white h-0.5 my-10" />
        <div>
          {DISCUSS.map((item) => (
            <div
              key={item.id}
              className="border-b border-white py-30 flex items-start justify-between gap-3"
            >
              <p className="text-[200px] -mt-20">{item.id}</p>
              <div className="max-w-100 w-full space-y-18">
                <p>{item.title}</p> <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-20 w-full gap-20">
          <p className="text-4xl">Discover how we can help</p>
          <button className="text-black bg-white px-6 py-3 rounded-full text-xl">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
}
