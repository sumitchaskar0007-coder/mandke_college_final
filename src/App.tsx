import { Component, lazy, type ErrorInfo, type ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MarketingLayout } from "./components/layout/MarketingLayout";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const CommercePage = lazy(() => import("./pages/CommercePage").then((m) => ({ default: m.CommercePage })));
const MandkeApproachPage = lazy(() => import("./pages/MandkeApproachPage").then((m) => ({ default: m.MandkeApproachPage })));
// BBA and BCA pages are temporarily disabled.
// const BbaPage = lazy(() => import("./pages/BbaPage").then((m) => ({ default: m.BbaPage })));
// const BcaPage = lazy(() => import("./pages/BcaPage").then((m) => ({ default: m.BcaPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage").then((m) => ({ default: m.AdmissionsPage })));
const AnnouncementsPage = lazy(() => import("./pages/AnnouncementsPage").then((m) => ({ default: m.AnnouncementsPage })));
const NoticesPage = lazy(() => import("./pages/NoticesPage").then((m) => ({ default: m.NoticesPage })));
const GalleryPage = lazy(() => import("./pages/GalleryPage").then((m) => ({ default: m.GalleryPage })));
const BlogListPage = lazy(() => import("./pages/BlogListPage").then((m) => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const AboutFacultyPage = lazy(() => import("./pages/AboutFacultyPage").then((m) => ({ default: m.AboutFacultyPage })));
const LibraryPage = lazy(() => import("./pages/LibraryPage").then((m) => ({ default: m.LibraryPage })));
const AlumniPage = lazy(() => import("./pages/AlumniPage").then((m) => ({ default: m.AlumniPage })));
const Simple = lazy(() => import("./pages/SimpleContentPage").then((m) => ({
  default: m.DistanceEducationPage,
})));
const IQACPage = lazy(() => import("./pages/IQACPage").then((m) => ({ default: m.IQACPage })));
const IQACDetailPage = lazy(() => import("./pages/IQACPage").then((m) => ({ default: m.IQACDetailPage })));
const ActivitiesPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.ActivitiesPage })));
const StakeholdersPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.StakeholdersPage })));
const MHHFPage = lazy(() => import("./pages/SimpleContentPage").then((m) => ({ default: m.MHHFPage })));
const SectionContentPage = lazy(() => import("./pages/SectionContentPage").then((m) => ({ default: m.SectionContentPage })));

class AppErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error("Mandke College render error", error, info); }
  render() {
    if (!this.state.error) return this.props.children;
    return <main className="mx-auto max-w-2xl px-6 py-24 text-center"><h1 className="font-heading text-3xl font-bold text-primary">Page could not load</h1><p className="mt-4 text-textSecondary">Refresh the page or restart the development server.</p><pre className="mt-6 overflow-auto rounded-btn bg-slate-100 p-4 text-left text-xs text-red-700">{this.state.error.message}</pre></main>;
  }
}

function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <p className="mt-2 text-textSecondary">The page you requested does not exist.</p>
    </section>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/faculty" element={<AboutFacultyPage />} />
          <Route path="/about/:slug" element={<SectionContentPage />} />
          <Route path="/academics" element={<Navigate to="/academics/courses" replace />} />
          <Route path="/academics/mandke-college-approach" element={<MandkeApproachPage />} />
          {/* BBA and BCA routes are temporarily disabled. */}
          <Route path="/academics/:slug" element={<SectionContentPage />} />
          <Route path="/commerce" element={<CommercePage />} />
          <Route path="/distance-education" element={<Simple />} />
          <Route path="/distance-education/:slug" element={<SectionContentPage />} />
          <Route path="/iqac" element={<IQACPage />} />
          <Route path="/iqac/:slug" element={<IQACDetailPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:slug" element={<SectionContentPage />} />
          <Route path="/stakeholders" element={<StakeholdersPage />} />
          <Route path="/stakeholders/:slug" element={<SectionContentPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/mhhf" element={<MHHFPage />} />
          <Route path="/mhhf/:slug" element={<SectionContentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </AppErrorBoundary>
  );
}
