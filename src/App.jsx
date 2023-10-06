import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homePages/Home";
import SearchPage from "./components/searchPages/SearchPage";
import DetailMovie from "./components/detailPages/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
