import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar";
import ReactLenis from "lenis/react";
import Home from "./pages/Home";

const WorkDetail = lazy(() => import("./pages/WorkDetail"));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <div>
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
          </Routes>
        </Suspense>
      </div>
    </ReactLenis>
  );
};

export default App;
