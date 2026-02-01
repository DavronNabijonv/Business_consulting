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
    <div className="bg-[#1f0808] sm:py-30 py-10 text-white">
      <div className="max-w-300 w-full mx-auto lg:px-2 px-5">
        <p className="sm:text-3xl text-2xl">Ready to Take the Next Step? </p>
        <p className="sm:text-3xl text-2xl">Let's Discuss</p>
        <div className="w-full bg-white h-0.5 lg:my-10 my-5" />
        <div>
          {DISCUSS.map((item) => (
            <div
              key={item.id}
              className="border-b border-white lg:py-30 py-10 flex md:flex-row flex-col sm:items-start md:items-center justify-between gap-3"
            >
              <p className="lg:text-[200px] sm:text-[100px] text-4xl lg:-mt-20">{item.id}</p>
              <div className="max-w-100 w-full lg:space-y-18 space-y-8">
                <p>{item.title}</p> <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center mt-20 w-full sm:gap-20 gap-5">
          <p className="lg:text-4xl sm:text-3xl text-2xl">Discover how we can help</p>
          <button className="text-black bg-white max-w-40 w-full px-6 py-2 rounded-full text-xl">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
}
