import hero_1 from "../assets/img/hero_1.png";
import hero_2 from "../assets/img/hero_2.png";
import hero_3 from "../assets/img/hero_3.png";
import hero_4 from "../assets/img/hero_4.png";
import hero_5 from "../assets/img/hero_5.png";
import hero_6 from "../assets/img/hero_6.png";
import blob_1 from "../assets/blob_1.svg";
import blob_2 from "../assets/blob_2.svg";

const HeroSection = () => {
  return (
    <section className="full-width content-grid bg-primary-0">
      <div className="content relative flex flex-col items-center justify-between pt-[10.25rem] xl:min-h-[56.56rem]">
        <h2 className="z-10 text-center text-5xl font-bold leading-[4rem] md:text-6xl md:leading-[5rem] lg:text-7xl lg:leading-[6.875rem] xl:text-[6.25rem]">
          Let’s create something <br /> great together.
        </h2>

        <figure className="absolute inset-0 flex size-full flex-col items-start justify-center lg:flex-row">
          <img src={blob_2} className="w-[32.06275rem] lg:-mr-44" />
          <img src={blob_1} className="w-[80.4225rem] lg:-mt-10" />
        </figure>

        <figure className="z-10 flex items-center justify-center [&>img]:w-full [&>img]:max-w-[15.2rem]">
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
