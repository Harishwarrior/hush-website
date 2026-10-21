import { Announcement } from "@/components/announcement";
import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PhoneMockup } from "@/components/phone-mockup";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center relative"
      id="home"
    >
      <Navbar />
      <Background />
      <div className="flex flex-col items-center gap-6 pt-28 pb-16 px-4 w-full max-w-6xl">
        <Announcement />
        <Hero />
        <PhoneMockup />
      </div>
      <Footer />
    </main>
  );
}
