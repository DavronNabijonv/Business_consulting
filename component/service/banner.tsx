export function Banner() {
  return (
    <div className="relative min-h-[91vh] flex items-end pb-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/service/service_hero.png')",
        }}
      />

      {/* content */}
      <div className="max-w-350 w-full mx-auto relative z-10 h-full flex items-end justify-start">
        <p className="text-3xl max-w-160 w-full">
          At Jones & Brown Legal, we are committed to exceptional service and
          successful outcomes with:
        </p>
      </div>
    </div>
  );
}
