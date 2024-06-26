import AboutSection from "../../sections/AboutSection";
import BannerSection from "../../sections/BannerSection";
import ContactSection from "../../sections/ContactSection";
import HeroSection from "../../sections/HeroSection";

const Main = () => {
  return (
    <main className="min-h-dvh *:min-h-80 *:border *:border-primary-100">
      <HeroSection />
      <AboutSection />
      <BannerSection />
      <ContactSection />
    </main>
  );
};
export default Main;
