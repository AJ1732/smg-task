import { useState } from "react";
import Button from "../ui/Button";
import NavItem from "../ui/NavItem";
import { Link, NavLink } from "react-router-dom";

const navlinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);

  return (
    <header className="full-width content-grid z-10">
      <div className="content relative">
        <div className="flex-between size-full bg-white">
          {/* LOGO */}
          <Link to="/">
            <h1 className="text-2xl font-bold">Hand</h1>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="max-md:hidden">
            <ul className="flex-between gap-4 [&>li]:p-2">
              {navlinks.map((navlink) => (
                <NavItem key={navlink}>
                  <NavLink to={navlink.toLocaleLowerCase()}>{navlink}</NavLink>
                </NavItem>
              ))}
            </ul>
          </nav>

          {/* NAV BUTTON */}
          <div className="max-md:hidden">
            <Button>Start a project</Button>
          </div>

          {/* MOBILE NAVLINKS */}
          <nav
            className={`${openNav ? "block" : "hidden"} absolute right-0 top-[110%] z-50 w-full space-y-6 bg-white p-4`}
          >
            <ul className="flex flex-col gap-4 [&>li]:p-2">
              {navlinks.map((navlink) => (
                <NavItem key={navlink}>{navlink}</NavItem>
              ))}
            </ul>

            <div>
              <Button>Start a project</Button>
            </div>
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpenNav((prev) => !prev)}
            className="rounded p-4 transition-all duration-500 hover:bg-primary-0/20 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-align-right"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="21" x2="9" y1="12" y2="12" />
              <line x1="21" x2="7" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
