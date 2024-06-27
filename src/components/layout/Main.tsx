import AboutSection from "../../sections/AboutSection";
import BannerSection from "../../sections/BannerSection";
import ContactSection from "../../sections/ContactSection";
import HeroSection from "../../sections/HeroSection";

const Main = () => {
  return (
    <main className="full-width content-grid mt-24 min-h-dvh">
      <HeroSection />
      <AboutSection />
      <BannerSection />
      <ContactSection />
    </main>
  );
};
export default Main;
