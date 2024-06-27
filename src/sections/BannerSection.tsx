const BannerSection = () => {
  return (
    <section className="full-width content-grid bg-black-0">
      <div className="flex flex-wrap items-center justify-between gap-8 pb-[3.4375rem] pt-[3.685rem] text-white">
        {stats.map(({ id, value, text }) => (
          <div key={id} className="space-y-[0.875rem] sm:max-md:even:text-end">
            <h4 className="text-6xl font-bold text-primary-100">{value} +</h4>
            <p className="text-[1.75rem] font-medium">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BannerSection;

const stats = [
  {
    id: 1,
    value: "350",
    text: "Clients Worldwide",
  },
  {
    id: 2,
    value: "20",
    text: "Team Members",
  },
  {
    id: 3,
    value: "100",
    text: "Projects Completed",
  },
  {
    id: 4,
    value: "85M",
    text: "Revenue Generated",
  },
];
