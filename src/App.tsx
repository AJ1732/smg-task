import { Outlet } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="content-grid all overflow-hidden *:border *:border-neutral-950">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
