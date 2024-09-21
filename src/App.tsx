import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "@pages/main/main";
import { MapPage } from "@pages/map/map";
import { PerformancePage } from "@pages/performance/performance";
import { BarPage } from "@pages/bar/bar";
import { BarDetail } from "@pages/bar/bar-detail";
import { Layout } from "@components/common/Layout";
import { TabNavigator } from "@components/common/TabNavigator";
import { GuidePage } from "@pages/performance/guide";
import { ErrorPage } from "@pages/error";
import { PerformanceDetailPage } from "@pages/performance/performanceDetail";
import { Timetable } from "@pages/performance/timetable";

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
            <Route
              path="/performance/:id"
              element={<PerformanceDetailPage />}
            />
            <Route path="/performance/timetable" element={<Timetable />} />
            <Route path="/performance/guide" element={<GuidePage />} />
            {/* bar page */}
            <Route path="/bar" element={<BarPage />} />
            <Route path="/bar-detail/:storeName" element={<BarDetail />} />
            <Route path="/bar-detail/:barName" element={<BarDetail />} />
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
