import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detailed/detail";
import Home from "./Pages/Home/home";
import Region from "./Pages/Region/region";
import Search from "./Pages/Search/search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/region/:id" element={<Region />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
