import { Link } from "react-router-dom";

export function Marquee() {
  return (
    <div
      className="relative z-[60] overflow-hidden border-b border-primary/20 bg-primary py-2 text-sm font-bold text-white"
      role="region"
      aria-label="Admissions announcement"
    >
      <span
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-primary to-transparent"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-primary to-transparent"
        aria-hidden
      />
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            <span className="px-5">B.Com Admissions Open 2026-27</span>
            <span className="text-accent" aria-hidden>
              |
            </span>
              <Link to="/admissions" className="px-8 transition hover:text-accent md:px-10">
                Apply Now
              </Link>
              <span className="text-accent" aria-hidden>
                |
              </span>
              <span className="px-8 md:px-10">
                BETTER YOU <span className="mx-4 text-accent md:mx-6">|</span> Your Goal - Our Mission
              </span>
            <span className="text-accent" aria-hidden>
              |
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
