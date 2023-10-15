import { BrowserRouter } from "react-router-dom";
import {
  Journals,
  Advertisements,
  AlumniGroupLink,
  Navbar,
  About,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 m-0 bg-primary content divide-y divide-blue-200 h-full overflow-auto">
        <Navbar />
        <div className="flex pt-4 pb-4 min-h-[600px] h-full">
          <Advertisements />
          <Journals />
          <AlumniGroupLink />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
