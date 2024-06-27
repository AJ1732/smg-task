import ContactForm from "../components/form/ContactForm";
import contact from "../assets/img/contact.png";

const ContactSection = () => {
  return (
    <section>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:items-start justify-between gap-20 lg:gap-8 py-[12.75rem]">
        <figure className="flex-center h-[55.6875rem] w-[38.875rem] bg-[#FEF1E0]">
          <img
            src={contact}
            className="max-w-[23.625rem]"
            alt="Two guys standing and smiling warmly, waiting for you to contact them"
          />
        </figure>

        <ContactForm />
      </div>
    </section>
  );
};
export default ContactSection;
