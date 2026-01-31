import { Footer, HomeBanner, Offer, Testimonal, Welcome } from "@/component";

export default function Home() {
  return (
    <div className="h-90">
      <HomeBanner />
      <Welcome />
      <Offer />
      <Testimonal />
      <Footer/>
    </div>
  );
}
