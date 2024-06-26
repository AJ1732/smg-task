import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("./success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="size-full max-w-[46.9375rem] text-black-0"
    >
      <fieldset className="flex-center lg:flex-end flex-col gap-7">
        <legend className="mb-12 max-lg:mx-auto lg:ml-auto">
          <h3 className="text-center text-[2.75rem] font-bold lg:text-right">
            We'd love to hear <br />
            from you
          </h3>
        </legend>

        <input required type="text" name="name" id="name" placeholder="Name" />
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          required
          type="url"
          name="url"
          id="url"
          placeholder="Website Url"
        />
        <textarea
          required
          name="project"
          id="project"
          placeholder="Project Details"
        ></textarea>

        <button className="w-full rounded-lg bg-black-100 py-9 text-center text-3xl font-medium text-white">
          Send Project
        </button>
      </fieldset>
    </form>
  );
};
export default ContactForm;
