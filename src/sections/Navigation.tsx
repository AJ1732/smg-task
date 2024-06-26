import Button from "../components/Button";
import NavLink from "../components/NavLink";

const Navigation = () => {
  const navlinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];
  
  return (
    <header className="flex-between size-full">
      {/* LOGO */}
      <h1>Hand</h1>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex-between gap-4 [&>li]:p-2">
          {navlinks.map((navlink) => (
            <NavLink key={navlink}>{navlink}</NavLink>
          ))}
        </ul>
      </nav>

      {/* NAV BUTTON */}
      <Button>Start a project</Button>
    </header>
  );
};
export default Navigation;
