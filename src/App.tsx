import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "@pages/main/main";
import { MapPage } from "@pages/map/map";
import { PerformancePage } from "@pages/performance/performance";
import { BarPage } from "@pages/bar/bar";
import { Layout } from "@components/common/Layout";
import { TabNavigator } from "@components/common/TabNavigator";
import { GuidePage } from "@pages/performance/guide";
import { ErrorPage } from "@pages/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* main page */}
            <Route path="/" element={<MainPage />} />
            {/* map page */}
            <Route path="/map" element={<MapPage />} />
            {/* performance page */}
            <Route path="/performance" element={<PerformancePage />} />
            <Route path="/performance/guide" element={<GuidePage />} />
            {/* bar page */}
            <Route path="/bar" element={<BarPage />} />
            {/* error page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <TabNavigator />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
