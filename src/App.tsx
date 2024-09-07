import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/main";
import { MapPage } from "./pages/map/map";
import { PerformancePage } from "./pages/performance/performance";
import { BarPage } from "./pages/bar/bar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* main page */}
          <Route path="/" element={<MainPage />}></Route>
          {/* map page */}
          <Route path="/map" element={<MapPage />}></Route>
          {/* performance page */}
          <Route path="/performance" element={<PerformancePage />}></Route>
          {/* bar page */}
          <Route path="bar" element={<BarPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
