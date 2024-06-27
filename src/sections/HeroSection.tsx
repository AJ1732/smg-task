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
        <h2 className="text-center z-10 text-[6.25rem] font-bold leading-[6.875rem]">
          Let’s create something <br /> great together.
        </h2>

        <figure className="absolute inset-0 flex justify-center items-start size-full ">
          <img src={blob_2} className="w-[32.06275rem] -mr-44" />
          <img src={blob_1} className="w-[80.4225rem] -mt-10" />
        </figure>

        <figure className="flex z-10 items-center justify-center [&>img]:max-w-[15.2rem]">
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
