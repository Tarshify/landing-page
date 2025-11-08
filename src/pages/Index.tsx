import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import WhyTarshify from "@/components/WhyTarshify";
// import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSolution />
      <WhyTarshify />
      <Portfolio />
      <AboutUs />
      {/* <Testimonials /> */}
      <CTA />
      {/* FAQ  */}
      <Footer />
      <PhoneButton />
    </div>
  );
};

export default Index;
