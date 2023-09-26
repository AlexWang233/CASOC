import { BrowserRouter } from "react-router-dom";
import {
  Journals,
  Navbar,
  About
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
        </div>
        <Journals/>
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
