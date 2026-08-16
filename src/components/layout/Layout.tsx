import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../navigation/Footer";
import { Navbar } from "../navigation/Navbar";
import { PageTransition } from "./PageTransition";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <div id="main-content" key={pathname} className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
