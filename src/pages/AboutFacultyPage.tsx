import { Helmet } from "react-helmet-async";
import { GraduationCap, LibraryBig, UserRound } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  qualification?: string;
  experience?: string;
  note?: string;
  photo?: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
};

const PRINCIPAL: TeamMember = {
  name: "Dr. Ambadas T Bhosale",
  role: "Principal",
  qualification: "PHD, M.Com, LLB, DLL & L.W.",
  experience: "40 years Experience",
  photo: "/images/Ambadas_t.png",
};

const TEAM_SECTIONS: TeamSection[] = [
  {
    title: "Teaching Staff",
    members: [
      {
        name: "Mrs. Amruta Bhide",
        role: "Head of Department - B.Com",
        note: "IQAC Co-ordinator",
        qualification: "M.Com",
        experience: "16 years of Teaching Experience",
        photo: "/images/Amruta_b.png",
      },
      // BCA faculty entry temporarily hidden.
      {
        name: "Mr. Mohan Yenpure",
        role: "Faculty - B.Com",
        note: "NSS Co-ordinator",
        qualification: "M. Com, B.Ed, LLB, LLM, SET",
        experience: "13 years of Teaching Experience",
        photo: "/images/Mohan_Y.png",
      },
      {
        name: "Ms. Swati Chopde",
        role: "Faculty - B.Com",
        qualification: "M.Phil",
        experience: "4 years of Teaching Experience",
        photo: "/images/Swati%20_C.png",
      },
      {
        name: "Mrs. Snehal Udavant",
        role: "Faculty - B.Com",
        qualification: "M. Com",
        experience: "5 years of Teaching Experience",
        photo: "/images/Snehal%20_U.png",
      },
      // BCA faculty entry temporarily hidden.
      {
        name: "Mrs. Sheetal Chavan",
        role: "Librarian",
        qualification: "BA, M.lib",
        experience: "1 year of Work Experience",
        photo: "/images/Sheetal_C.png",
      },
      // BBA faculty entry temporarily hidden.
      {
        name: "Ms. Neha Chavan",
        role: "Physical Director",
        qualification: "Ph.D, M.Phil, B.Ed, M.Ed all in Physical Education",
        experience: "9 years Experience",
        photo: "/images/Neha_C.png",
      },
      {
        name: "Mr. Vishwesh Lohar",
        role: "Faculty - B.Com",
        note: "Student Development Officer",
        qualification: "MA Economics",
        experience: "2 years of Teaching Experience",
        photo: "/images/Vishwesh_L.png",
      },
      // BBA faculty entry temporarily hidden.
      {
        name: "Ms. Soniya Jadhav",
        role: "Faculty - B.Com",
        qualification: "M.A, Ph.D (English Literature)",
        experience: "1 year of Teaching Experience",
        photo: "/images/Soniya%20_J.png",
      },
      // BBA/BCA faculty entry temporarily hidden.
    ],
  },
  {
    title: "Non-Teaching Staff",
    members: [
      {
        name: "Mr. Hari Solanki",
        role: "Administrative Department Head",
        qualification: "M.Com",
        experience: "31 years of Experience",
        photo: "/images/Hari_S.png",
      },
      {
        name: "Ms. Surekha Padwale",
        role: "Clerk",
        qualification: "MA Psychology",
        experience: "34 years of Administrative Experience",
        photo: "/images/Surekha_P.png",
      },
      {
        name: "Mr. Adarsh Kadam",
        role: "Head Clerk",
        qualification: "B.Com",
        experience: "1 year Experience",
        photo: "/images/Adarsh_K.png",
      },
      {
        name: "Mrs. Monali Kangude",
        role: "Accountant",
        qualification: "B.Com",
        experience: "15 years of Experience",
        photo: "/images/Monali_K.png",
      },
    ],
  },
  {
    title: "Support Staff",
    members: [
      {
        name: "Mr. Akash Kamble",
        role: "Peon",
        qualification: "M.A Appeared",
        experience: "6 years Experience",
        photo: "/images/Akash_K.png",
      },
      {
        name: "Mrs. Surekha Jadhav",
        role: "House Keeping",
        experience: "20 years Experience",
        photo: "/images/Surekha_J.png",
      },
      {
        name: "Mr. Aakash Ghare",
        role: "Peon",
        qualification: "B.Com",
        experience: "1 year Experience",
        photo: "/images/Aakash_G.png",
      },
      {
        name: "Mrs. Aarti Dhadve",
        role: "House Keeping",
        experience: "10 years Experience",
        photo: "/images/Aarti_D.png",
      },
    ],
  },
];

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <article className="group flex h-full flex-col rounded-card border border-borderSoft bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-3">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-section text-xl font-extrabold text-primary ring-1 ring-borderSoft">
          {member.photo && !imgError ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span>{initials(member.name)}</span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold leading-tight text-primary">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase text-accent">{member.role}</p>
          {member.note ? <p className="mt-1 text-sm font-medium text-textSecondary">{member.note}</p> : null}
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-sm text-textSecondary">
        {member.qualification ? <p>- {member.qualification}</p> : null}
        {member.experience ? <p>- {member.experience}</p> : null}
      </div>
    </article>
  );
}

import React from "react";

export function FacultyDirectory({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-5 md:py-6">
        <div className="rounded-btn border border-borderSoft bg-white p-5 shadow-card md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Principal</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary">College Leadership</h2>
            </div>
            <GraduationCap className="h-10 w-10 text-accent" aria-hidden />
          </div>
          <div className="mt-5 max-w-xl">
            <TeamCard member={PRINCIPAL} />
          </div>
        </div>
      </section>

      {TEAM_SECTIONS.map((section) => (
        <section key={section.title} className="mx-auto max-w-6xl px-4 py-5 md:py-6">
          <div className="mb-4 flex items-center gap-3">
            {section.title === "Teaching Staff" ? (
              <GraduationCap className="h-8 w-8 text-accent" aria-hidden />
            ) : section.title === "Non-Teaching Staff" ? (
              <UserRound className="h-8 w-8 text-accent" aria-hidden />
            ) : (
              <LibraryBig className="h-8 w-8 text-accent" aria-hidden />
            )}
            <h2 className="font-heading text-3xl font-bold text-primary">{section.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export function AboutFacultyPage() {
  return (
    <>
      <Helmet>
        <title>Faculty & Staff - Mandke College</title>
      </Helmet>
      <FacultyDirectory />
    </>
  );
}
