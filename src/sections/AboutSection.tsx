import about from "../assets/img/about.png";
import esther from "../assets/img/esther.png";
import cody from "../assets/img/cody.png";
import brooklyn from "../assets/img/brooklyn.png";

const AboutSection = () => {
  return (
    <section className="mb-[12.5rem]">
      {/* WHO ARE WE */}
      <div className="mb-[12.5rem] space-y-[8.4375rem] pt-[8.375rem] text-black-0">
        <article className="space-y-9">
          <h3 className="text-[2.75rem] font-bold">Who we are</h3>
          <p className="text-3xl font-medium">
            We love what we do and create partnerships with our clients to
            ensure their digital transformation is positioned for long-term
            success.We believe that the human dimensions essential to start any
            successful project and that this is where splendid emotional
            relationships between the company and people are born.
          </p>
        </article>

        <figure>
          <img
            src={about}
            alt="A half-sliced orange, a bottle of orange juice and ginger displayed on a yello background "
          />
        </figure>
      </div>

      {/* MEET THE HEROES */}
      <div className="space-y-[6.875rem]">
        <header>
          <h3 className="text-center text-[2.75rem] font-bold text-black-0">
            Meet the heroes behind the magic
          </h3>
        </header>

        <div className="flex-center gap-14">
          {heroes.map(({ id, src, name, role }) => (
            <article
              key={id}
              className="space-y-[2.8065rem] px-5 pb-9 pt-4 shadow"
            >
              <figure>
                <img src={src} alt={name} className="max-w-[24.5rem]" />
              </figure>
              <figcaption>
                <h4 className="text-[2.125rem] font-bold text-black-0">
                  {name}
                </h4>
                <p className="text-2xl font-medium text-black-0 text-opacity-50">
                  {role}
                </p>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

const heroes = [
  {
    id: 1,
    src: esther,
    name: "Esther Howard",
    role: "Founder",
  },
  {
    id: 2,
    src: cody,
    name: "Cody Fisher",
    role: "Developer",
  },
  {
    id: 3,
    src: brooklyn,
    name: "Brooklyn Simmons",
    role: "Designer",
  },
];
