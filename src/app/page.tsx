import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Needs from "@/components/Needs";
import Framework from "@/components/Framework";
import Ports from "@/components/Ports";
import RiskManagement from "@/components/RiskManagement";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Needs />
        <Framework />
        <Ports />
        <RiskManagement />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
