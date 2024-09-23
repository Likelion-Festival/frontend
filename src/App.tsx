import { useState, useEffect } from "react";
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
import { SplashScreen } from "@pages/splash/SplashScreen";
import { NoticeListPage } from "@pages/notice/noticeList";
import { useMapContext } from "@context/MapContext";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { isNavVisible } = useMapContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isSplashVisible ? (
        <SplashScreen onSplashFinish={() => setIsSplashVisible(false)} />
      ) : (
        <Layout>
          <Routes>
            {/* main page */}
            <Route path="/" element={<MainPage />} />
            {/* notice page */}
            <Route path="/notice" element={<NoticeListPage />} />
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
          {isNavVisible && <TabNavigator />}
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
