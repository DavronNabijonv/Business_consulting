export function Banner() {
  return (
    <div className="relative min-h-[91vh] flex items-end pb-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/schedule/schedule_banner.png')",
        }}
      />

      {/* content */}
      <div className="max-w-350 w-full mx-auto relative z-10 h-full flex items-end justify-start">
        <p className="text-8xl max-w-250 w-full">
          Let us help you
        </p>
      </div>
    </div>
  );
}
