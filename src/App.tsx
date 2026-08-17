import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const Experience = lazy(() => import("./pages/Experience"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="flex h-[60vh] items-center justify-center" aria-label="Loading">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-brand-600 dark:border-zinc-800 dark:border-t-brand-400" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
