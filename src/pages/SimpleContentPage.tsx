import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import classroomImage from "../assets/images/class.png";
import parentImage from "../assets/images/parent.png";
import teacherImage from "../assets/images/teacher.png";

export function SimpleContentPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>{title} — Mandke College</title>
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-8 text-textSecondary">{children}</section>
    </>
  );
}

export function DistanceEducationPage() {
  return (
    <SimpleContentPage title="Distance Education">
      <p>
        Detailed procedures, links, and FAQs can be managed from the admin CMS. For admissions counselling, visit the{" "}
        <Link to="/admissions" className="font-semibold text-accent hover:underline">
          Admissions
        </Link>{" "}
        section.
      </p>
    </SimpleContentPage>
  );
}

export function IQACPage() {
  return (
    <SimpleContentPage title="IQAC">
      <p>IQAC documents, AQAR links, and best practices will appear here as they are published through the CMS.</p>
    </SimpleContentPage>
  );
}

export function LibraryPage() {
  return (
    <SimpleContentPage title="Library">
      <p>Timings, OPAC links, e-resources, and new arrivals will be updated by administrators.</p>
    </SimpleContentPage>
  );
}

export function ActivitiesPage() {
  return (
    <SimpleContentPage title="Activities">
      <p>Photos, reports, and upcoming activities will be published from the gallery and CMS.</p>
    </SimpleContentPage>
  );
}

export function StakeholdersPage() {
  const stakeholders = [
    {
      title: "Students",
      image: classroomImage,
      paragraphs: [
        "Our Students are our pride and joy. We strive very hard each day to make them into self assured, confident and achievement oriented global citizens, who will collectively strive to make the society better.",
        "Our teachers through various methods allow students to continuously learn and unlearn so that they get a world view which will help them realise their true and full potential.",
        "The college encourages students to participate in academics, co-curricular activities, skill-building sessions, leadership opportunities, and campus initiatives that help them grow with confidence and responsibility.",
      ],
    },
    {
      title: "Parents",
      image: parentImage,
      paragraphs: [
        "Parents are an important part of the whole academic process. They are unconditionally invested in the well-being and career growth of their ward.",
        "Regular constructive interaction with the parents helps us to understand their aspirations for their ward, in turn helping us improve our processes for the benefit of the students.",
        "Through open communication, counselling support, and timely academic updates, we work with parents as partners in shaping a positive and purposeful learning journey.",
      ],
    },
    {
      title: "Teachers & Staff",
      image: teacherImage,
      paragraphs: [
        "Teachers & Staff are the backbone of our College. We have been fortunate to have highly experienced, dedicated, sincere and enthusiastic teachers in our team.",
        "Their sole aim is to mould students to be the best versions of themselves. For this the College aims to provide them with best working conditions and facilities.",
        "Our faculty and staff support students through classroom teaching, mentoring, administrative guidance, examination support, activities, and a caring campus environment.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Stakeholders - Mandke College</title>
      </Helmet>
      <section className="bg-section py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8">
            {stakeholders.map((stakeholder, index) => (
              <article
                key={stakeholder.title}
                className="grid gap-6 rounded-btn border border-borderSoft bg-white p-5 shadow-card md:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <figure className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden rounded-btn border border-borderSoft bg-section`}>
                  <img
                    src={stakeholder.image}
                    alt={stakeholder.title}
                    className="h-64 w-full object-cover md:h-80"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Stakeholder</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold text-primary">{stakeholder.title}</h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-textSecondary md:text-lg">
                    {stakeholder.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AlumniPage() {
  return (
    <SimpleContentPage title="Alumni">
      <p>Alumni stories and registration will be wired to dedicated forms and workflows in a future iteration.</p>
    </SimpleContentPage>
  );
}

export function MHHFPage() {
  const highlights = [
    {
      title: "Industry-Relevant Training",
      description:
        "Industry-relevant courses in collaboration with companies designed for job readiness; curated by industry experts to ensure alignment with current market trends.",
    },
    {
      title: "Hands-On Experience",
      description:
        "Curriculum designed and taught by industry experts, aligned with current market trends. Live projects and real-world applications prepare students for immediate job readiness.",
    },
    {
      title: "Diverse Career Paths",
      description:
        "Hands-on experience with live projects and training in diverse fields like food, finance, fashion, IT, and digital marketing, designed for career advancement in chosen areas.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mandke Human Happiness Foundation - Mandke College</title>
      </Helmet>
      <section className="bg-section py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-textSecondary md:text-lg">
            Foundation programmes and impact stories are showcased through Mandke Skills.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="rounded-btn border border-borderSoft bg-white p-6 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 font-heading text-lg font-bold text-accent">
                  {index + 1}
                </div>
                <h2 className="mt-5 font-heading text-xl font-bold text-primary">{highlight.title}</h2>
                <p className="mt-3 leading-relaxed text-textSecondary">{highlight.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.mandkeskills.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3 font-bold text-white shadow-md transition hover:bg-amber-600"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
