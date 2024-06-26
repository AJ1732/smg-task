import AboutSection from "../../sections/AboutSection";
import BannerSection from "../../sections/BannerSection";
import ContactSection from "../../sections/ContactSection";
import HeroSection from "../../sections/HeroSection";

const Main = () => {
  return (
    <main className="full-width content-grid min-h-dvh *:border *:border-primary-100">
      <HeroSection />
      <AboutSection />
      <BannerSection />
      <ContactSection />
    </main>
  );
};
export default Main;
