import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#f7f4eb] py-20">
      <div className="max-w-7xl w-full mx-auto px-4 space-y-20">
        <div className="flex items-center gap-2 justify-between">
          <Image
            src="/Logo_black.png"
            alt="footer logo black image"
            width={70}
            height={70}
            className=""
          />
          <div className="text-black text-4xl">Jones & Brown Legal</div>
        </div>
        <div className="text-black text-xl">
          Deep expertise, decisive courtroom presence
        </div>
        <div className="max-w-200 w-full grid grid-cols-3 gap-2">
          <div className="text-md text-black spacy-y-2">
            <p>hello@gmail.com</p>
            <p>(090) 090-09-09</p>
          </div>
          <div className="text-md text-black spacy-y-2">
            <p>123 Candyland Lane</p>
            <p>Suite 123</p>
            <p>Virginia California, Ca 11223</p>
          </div>
          <div className="text-md text-black spacy-y-2">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Bluesky</p>
          </div>
        </div>
        <div className="text-md text-black spacy-y-2">
          <p>Jones & Brown Legal</p>
          <p> © 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
