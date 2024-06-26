import Footer from "./sections/Footer";
import Main from "./sections/Main";
import Navigation from "./sections/Navigation";

function App() {
  return (
    <div className="content-grid all *:border *:border-neutral-950">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
