import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroBanner />
      <Projects />
      <Footer />
    </main>
  );
}
