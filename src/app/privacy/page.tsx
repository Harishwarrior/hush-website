import { Background } from "@/components/background";
import { Navbar } from "@/components/navbar";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center relative" id="home">
      <Navbar />
      <Background />
      <div className="flex flex-col items-center gap-6 pt-28 pb-16 px-4 w-full max-w-6xl">
        <PrivacyPolicy />
      </div>
      <Footer />
    </main>
  );
}
