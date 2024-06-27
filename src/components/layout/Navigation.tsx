import Button from "../ui/Button";
import NavItem from "../ui/NavItem";

const Navigation = () => {
  const navlinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

  return (
    <header className="flex-between z-10 size-full bg-white">
      {/* LOGO */}
      <h1 className="text-2xl font-bold">Hand</h1>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex-between gap-4 [&>li]:p-2">
          {navlinks.map((navlink) => (
            <NavItem key={navlink}>{navlink}</NavItem>
          ))}
        </ul>
      </nav>

      {/* NAV BUTTON */}
      <Button>Start a project</Button>
    </header>
  );
};
export default Navigation;
