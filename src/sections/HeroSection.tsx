import hero_1 from "../assets/img/hero_1.png"
import hero_2 from "../assets/img/hero_2.png"
import hero_3 from "../assets/img/hero_3.png"
import hero_4 from "../assets/img/hero_4.png"
import hero_5 from "../assets/img/hero_5.png"
import hero_6 from "../assets/img/hero_6.png"

const HeroSection = () => {
  return (
    <section className="full-width content-grid bg-primary-0">
      <div className="flex flex-col items-center justify-between pt-[10.25rem]">
        <h2 className="text-center text-[6.25rem] font-bold leading-[6.875rem]">
          Let’s create something <br /> great together.
        </h2>

        <figure className="flex justify-center items-center [&>img]:max-w-[15.2rem]">
          <img src={hero_1} alt="hero image 1" />
          <img src={hero_2} alt="hero image 1" />
          <img src={hero_3} alt="hero image 1" />
          <img src={hero_4} alt="hero image 1" />
          <img src={hero_5} alt="hero image 1" />
          <img src={hero_6} alt="hero image 1" />
        </figure>
      </div>
    </section>
  );
};
export default HeroSection;
