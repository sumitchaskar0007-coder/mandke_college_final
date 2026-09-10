import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdmissionsPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closePopup() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="admissions-popup-title"
        className="relative w-full max-w-lg overflow-hidden rounded-card bg-[#f8fbff] shadow-2xl"
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close admissions popup"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <header className="bg-gradient-to-r from-primary to-[#1768c4] px-6 py-5 text-center text-white">
          <h2 id="admissions-popup-title" className="font-heading text-2xl font-bold">
            Admissions Open 2026-27
          </h2>
          <p className="mt-1 text-sm font-medium text-white/90">Start Your Journey from Qualification to Competence!</p>
        </header>

        <div className="space-y-4 p-5 sm:p-6">
          <article className="rounded-card border border-sky-300 bg-sky-100/80 p-4 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-primary">B.Com Program</h3>
            <p className="text-sm text-textSecondary">Bachelor of Commerce (SPPU Affiliated)</p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-btn bg-white/90 px-3 py-2">
                <p className="text-xs text-textSecondary">Duration</p>
                <p className="font-bold text-primary">3 Years</p>
              </div>
              <div className="rounded-btn bg-white/90 px-3 py-2">
                <p className="text-xs text-textSecondary">Eligibility</p>
                <p className="font-bold text-primary">12th Pass</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm font-medium text-primary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                Dedicated Placement Cell & Internships
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                Acquire Mastery in MS-Office & AI
              </li>
            </ul>
          </article>

          <article className="rounded-card border border-sky-300 bg-sky-100/80 p-4 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-primary">NEP 2020 & Scholarships</h3>
            <p className="text-sm text-textSecondary">Bachelor of Commerce (SPPU Affiliated)</p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-primary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                Earn & Learn Opportunities
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                Multiple Entry & Exit Options
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                Free Education for Female Students (As per GR)
              </li>
            </ul>
          </article>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              to="/admissions"
              onClick={closePopup}
              className="inline-flex min-h-[46px] items-center justify-center rounded-btn bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-accent"
            >
              Apply Now
            </Link>
            <Link
              to="/contact#enquiry"
              onClick={closePopup}
              className="inline-flex min-h-[46px] items-center justify-center rounded-btn border-2 border-primary bg-white px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-section"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
