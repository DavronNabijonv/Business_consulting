export function Banner() {
  return (
    <div className="relative min-h-[91vh] flex items-end pb-10 mt-17">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/schedule/schedule_banner.png')",
        }}
      />

      {/* content */}
      <div className="max-w-350 w-full mx-auto relative lg:px-2 px-5 z-10 h-full flex items-end justify-start">
        <p className="lg:text-8xl sm:text-6xl text-4xl max-w-250 w-full">
          Let us help you
        </p>
      </div>
    </div>
  );
}
