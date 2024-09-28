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
import { AlarmProvider } from "./context/AlarmContext";
import { SplashScreen } from "@pages/splash/SplashScreen";
import { NoticeListPage } from "@pages/notice/noticeList";
import { useMapContext } from "@context/MapContext";
import { DevelopersPage } from "@pages/developer/developers";
import { DetailPage } from "@pages/notice/DetailPage";
import { MapSearch } from "@components/map/MapSearch";
import ScrollToTop from "@components/developer/ScrollTop";

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { isNavVisible } = useMapContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const preventPinchZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventPinchZoom, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventPinchZoom);
    };
  }, []);

  return (
    <AlarmProvider>
      <BrowserRouter>
        <ScrollToTop />
        {isSplashVisible ? (
          <SplashScreen onSplashFinish={() => setIsSplashVisible(false)} />
        ) : (
          <Layout>
            <Routes>
              {/* main page */}
              <Route path="/" element={<MainPage />} />
              {/* notice page */}
              <Route path="/notice-list" element={<NoticeListPage />} />
              <Route path="/developers" element={<DevelopersPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              {/* map page */}
              <Route path="/map" element={<MapPage />} />
              <Route path="/map/search" element={<MapSearch />} />
              {/* performance page */}
              <Route path="/performance" element={<PerformancePage />} />
              <Route
                path="/performance/:id"
                element={<PerformanceDetailPage />}
              />
              <Route
                path="/performance/timetable/:day"
                element={<Timetable />}
              />
              <Route path="/performance/guide" element={<GuidePage />} />
              {/* bar page */}
              <Route path="/bar" element={<BarPage />} />
              <Route path="/bar-detail/:storeId" element={<BarDetail />} />
              {/* error page */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            {isNavVisible && <TabNavigator />}
          </Layout>
        )}
      </BrowserRouter>
    </AlarmProvider>
  );
}

export default App;
