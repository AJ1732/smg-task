import { Link } from "react-router-dom";
import success from "../../assets/img/success.png";

const SuccessPage = () => {
  return (
    <main className="full-width content-grid mt-24 min-h-dvh bg-primary-0">
      <div className="flex flex-col items-start lg:items-center justify-center gap-20 py-12 xl:flex-row">
        <div className="space-y-6 lg:pb-28">
          <hgroup className="space-y-4">
            <h2 className="text-6xl font-bold">Success!</h2>
            <h4 className="ml-1 text-xl">
              Congratulations, you've succesffuly started a project.
            </h4>
          </hgroup>

          <p className="ml-1">
            What to do next? Explore our{" "}
            <Link to={`/`} className="font-medium text-secondary-100">
              blogs
            </Link>{" "}
            and other{" "}
            <Link to={`/`} className="font-medium text-secondary-100">
              services
            </Link>
          </p>
        </div>

        <figure className="mx-auto">
          <img src={success} alt="Success!" />
        </figure>
      </div>
    </main>
  );
};
export default SuccessPage;
