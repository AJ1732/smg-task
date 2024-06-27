import Button from "../ui/Button";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import NavItem from "../ui/NavItem";

const Footer = () => {
  return (
    <footer className="full-width content-grid bg-grey-50 font-pjs">
      <div className="content flex flex-col justify-between pb-8 pt-20">
        <div className="flex-between">
          <div className="space-y-7">
            <h3 className="text-2xl font-bold leading-6">Hand</h3>
            <p className="font-pjs text-sm font-semibold leading-6 text-grey-500">
              We love what we do and create partnerships
            </p>
          </div>

          <div className="flex flex-col items-end justify-center text-grey-600">
            <Button>Start a project</Button>

            <p className="mx-auto mb-4 mt-6 leading-[1.3125rem]">
              hello@devseal.tech
            </p>

            <div className="flex-center gap-4">
              <figure className="flex-center gap-[0.8075rem]">
                <img src={twitter} />
                <img src={linkedin} />
                <img src={facebook} />
                <img src={instagram} />
              </figure>

              <p className="font-medium">Hand</p>
            </div>
          </div>
        </div>

        <div className="flex-center size-full">
          <div className="w-full max-w-[75rem] border-t-[0.0625rem] border-grey-600"></div>
        </div>

        <div className="flex-between">
          <p className="text-lg text-grey-600">
            © 2024 hand. All Rights Reserved
          </p>

          <nav className="flex gap-2 *:p-2">
            <NavItem>Privacy Policy</NavItem>
            <NavItem>Media Kit</NavItem>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
