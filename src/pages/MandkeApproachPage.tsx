import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SEMESTERS = [
  ["Semester 1 | Discover Yourself", ["Aptitude Test with a detailed report to understand strengths and areas for development.", "Personality SWOT Analysis to identify strengths, weaknesses, opportunities and areas for growth.", "Winning Mindset inputs from experts to build the right attitude for the academic journey."]],
  ["Semester 2 | Build Your Communication", ["Focused inputs to develop effective communication skills.", "Career seminars introducing diverse opportunities after a Commerce degree.", "Exposure to professional pathways to help students make informed choices."]],
  ["Semester 3 | Develop Industry-Relevant Skills", ["Tally Essentials 1 Certification to build practical accounting skills.", "Career counselling for accounting and finance pathways."]],
  ["Semester 4 | Choose Your Career Path", ["Explore interests and identify skills aligned with career goals.", "Build a career path through MILES – Mandke Institute for Learning Employable Skills.", "Develop practical, industry-relevant and employable skills alongside the B.Com degree."]],
  ["Semester 5 | Gain Industry Exposure", ["Paid internships based on skills and certifications developed during the first two years.", "Practical workplace experience and understanding of professional expectations.", "Management lecture series connecting academic concepts with real-world business situations."]],
  ["Semester 6 | Become Career-Ready", ["Interview Skills to confidently face recruitment opportunities.", "Build Your CV with a professional representation of skills and achievements.", "Professional Etiquette for effective workplace behaviour and communication.", "Career Mindset seminars for a confident transition to the professional world."]],
] as const;

export function MandkeApproachPage() {
  return <>
    <Helmet><title>Mandke College Approach - Mandke College</title></Helmet>
    <section className="bg-gradient-to-br from-primary to-dark py-12 text-white md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">Your Goal | Our Mission – BETTER YOU</p>
        <h1 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Mandke College Approach – Building Competence &amp; Mindset</h1>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="space-y-4 text-lg leading-relaxed text-textSecondary">
        <p>At Mandke College, B.COM stands for Building Competence &amp; Mindset. More than a traditional commerce degree, it is a student-focused journey designed to develop practical skills, confidence, industry readiness, and the mindset needed to succeed in the real world.</p>
        <p>We believe every student is unique, which is why we focus on creating customised career pathways based on individual abilities, strengths, and interests - helping each learner discover the right direction for a meaningful and successful future.</p>
        <p>We believe every student has unique potential, aspirations, and strengths. Your Goal | Our Mission – BETTER YOU reflects our commitment to helping students become the best version of themselves.</p>
        <p>We have designed a semester-wise multidisciplinary student journey to help students understand themselves, develop essential skills, explore career opportunities, gain industry exposure and become career-ready.</p>
        <p>Through our structured inputs, together with MILES – Mandke Institute for Learning Employable Skills, students progressively move from self-discovery → skill development → career exploration → industry exposure → career readiness.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SEMESTERS.map(([title, points]) => <article key={title} className="rounded-btn border border-borderSoft bg-white p-5 shadow-card">
          <h2 className="font-heading text-xl font-bold text-primary">{title}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">{points.map((point) => <li key={point}>- {point}</li>)}</ul>
        </article>)}
      </div>
      <div className="mt-10 text-center"><Link to="/academics/courses#programs-offered" className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 font-bold text-white shadow-md">Choose Program</Link></div>
    </section>
  </>;
}
