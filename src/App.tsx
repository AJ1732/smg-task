import { Outlet } from "react-router-dom";
import Navigation from "./sections/Navigation";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="content-grid all *:border *:border-neutral-950">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
