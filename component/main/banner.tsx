export function Banner() {
  return (
    <div className="relative min-h-screen flex items-end pb-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/Header_section_home.png')",
        }}
      />

      {/* content */}
      <div className="max-w-350 w-full mx-auto relative z-10 h-full flex items-end justify-start">
        <div className="space-y-8">
          <p className="text-white text-9xl">Jones & Brown Legal</p>
          <div className="flex items-center justify-between gap-5">
            <p className="text-3xl max-w-150 w-full">Deep expertise, decisive courtroom presence</p>
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
