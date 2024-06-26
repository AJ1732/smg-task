const Navigation = () => {
  return (
    <header className="flex-between size-full">
      {/* LOGO */}
      <h1>Hand</h1>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex-between gap-4 [&>li]:p-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      {/* NAV BUTTON */}
      <button>Start a project</button>
    </header>
  );
};
export default Navigation;