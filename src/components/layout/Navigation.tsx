import Button from "../ui/Button";
import NavItem from "../ui/NavItem";

const Navigation = () => {
  const navlinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

  return (
    <header className="full-width content-grid z-10">
      <div className="content relative">
        <div className="flex-between size-full bg-white">
          {/* LOGO */}
          <h1 className="text-2xl font-bold">Hand</h1>

          {/* NAV LINKS */}
          <nav className="max-md:hidden">
            <ul className="flex-between gap-4 [&>li]:p-2">
              {navlinks.map((navlink) => (
                <NavItem key={navlink}>{navlink}</NavItem>
              ))}
            </ul>
          </nav>

          {/* NAV BUTTON */}
          <div className="max-md:hidden">
            <Button>Start a project</Button>
          </div>

          {/* HAMBURGER */}
          <div className="rounded p-4 transition-all duration-500 hover:bg-primary-0/20">
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
