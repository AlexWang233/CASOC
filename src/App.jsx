import { BrowserRouter } from "react-router-dom";
import {
  Journals,
  Advertisements,
  Membership,
  Navbar,
  About,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary content">
        <Navbar />
        <div className="casoc-body">
          <Advertisements />
          <Journals />
          <Membership />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;