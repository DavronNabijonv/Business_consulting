export function Banner() {
  return (
    <div className="relative min-h-screen flex items-end pb-10 mt-17">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/Header_section_home.png')",
        }}
      />

      {/* content */}
      <div className="max-w-350 w-full mx-auto lg:px-2 px-5 relative z-10 h-full flex items-end justify-start">
        <div className="sm:space-y-8 space-y-30">
          <p className="text-white lg:text-9xl md:text-7xl text-5xl">Jones & Brown Legal</p>
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between gap-5">
            <p className="lg:text-3xl text-2xl max-w-150 w-full">Deep expertise, decisive courtroom presence</p>
            <p className="text-xl max-w-100 w-full">
              We've been serving the Los Angeles area with expert legal counsel
              since 1976.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
