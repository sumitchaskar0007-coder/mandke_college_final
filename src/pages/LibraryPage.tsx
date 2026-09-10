import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  LibraryBig,
  MapPin,
  Printer,
  ShieldCheck,
} from "lucide-react";
import buildingImage from "../assets/images/building-optimized.jpg";
import classroomImage from "../assets/images/class.jpeg";
import computerLabImage from "../assets/images/clab.jpeg";
import gymImage from "../assets/images/gym.png";
import libraryImage from "../assets/images/library.jpeg";
import presentationRoomImage from "../assets/images/presentation-room.png";
import seminarHallImage from "../assets/images/seminar.jpeg";

const LIBRARY_STATS = [
  { label: "Number of Books", value: "3000+" },
  { label: "Magazines / Periodicals / Journals", value: "20" },
  { label: "Rare or Special Books", value: "20" },
  { label: "Computers with Internet", value: "02" },
];

const LIBRARY_SERVICES = [
  "OPAC (Online Public Access Catalogue) through VRIDHHI Software is implemented to check the availability and status of library material.",
  "All the books in the library have barcodes for referencing.",
  "Computer and Internet facility is provided to the staff and students.",
  "Facility to print and photocopy study material is available to students, if required.",
  "Latest editions of competitive examination books are made available in the library.",
  "Daily newspapers in English and Marathi are available for the users.",
  "Drinking water facility is provided.",
  "Display stands allow users to know of latest arrivals of books and magazines in the library.",
  "Every year Saraswati Pooja and Vachan Prerna Din (15th Oct) are celebrated in the library.",
  "Student and faculty feedback is welcomed and acted upon to continuously improve services in the library.",
];

const LIBRARY_RULES = [
  "Student ID and own library card are compulsory to get books issued. Library card is non-transferable.",
  "Maximum 2 books will be issued against library card for 7 days only.",
  "Late charge of 1 rupee per day per book will be charged after 7 days.",
  "Periodicals, journals and reference material will be issued against ID card.",
  "If any book is damaged or lost, student will have to replace the same at own cost.",
  "Eatables and water bottles are not allowed inside library.",
  "Silence, decorum and discipline must be maintained in the library.",
  "Readers should ensure that cell phones are in switch off or silent mode at all times in the library.",
  "Use of computer online and offline services are for academic use only and not for commercial or personal purposes.",
  "Students must follow library rules set forth from time to time. Failing to do so might result in suspension, cancellation, or permanent blacklisting from admission to and borrowing of books from the library.",
];

const ONLINE_PUBLICATIONS = [
  { label: "Indian Journals", href: "https://www.indianjournals.com/" },
  { label: "Dalal Street Investment Journal", href: "https://www.dsij.in/" },
];

const TIMINGS = [
  { day: "Monday to Friday", hours: "8am - 3pm" },
  { day: "Saturday", hours: "8am - 1pm" },
  { day: "Lunch Break", hours: "1pm - 1:30pm" },
];

const INFRASTRUCTURE_FACILITIES = [
  {
    title: "Central & Convenient Location",
    description:
      "Right next to the metro station, with a bus stop exactly opposite the premises and a convenient location near Paud Phata Flyover.",
    image: buildingImage,
    alt: "Smt. Sudhatai Mandke College building",
  },
  {
    title: "Library & Knowledge Resource Center",
    description:
      "An extensive library that houses books, magazines, periodicals and learning resources which keep our students gainfully engaged.",
    image: libraryImage,
    alt: "Library and Knowledge Resource Center",
  },
  {
    title: "Spacious and Airy Classrooms",
    description: "A good, clean and comfortable environment that supports a high level of productivity for every student.",
    image: classroomImage,
    alt: "Spacious classroom at Mandke College",
  },
  {
    title: "Boys & Girls Common Rooms",
    description: "Separate common rooms for boys and girls to relax between their busy academic schedules.",
    image: buildingImage,
    alt: "Student facilities at Mandke College",
  },
  {
    title: "Computer Lab",
    description:
      "A spacious computer laboratory equipped with the latest computers, software, high-speed internet, a server and UPS backup.",
    image: computerLabImage,
    alt: "Computer laboratory at Mandke College",
  },
  {
    title: "Gymnasium & Games Room",
    description:
      "A well-equipped gymnasium and indoor games room where students can build physical fitness and imbibe the sportsman spirit.",
    image: gymImage,
    alt: "Gymnasium and indoor games room",
  },
  {
    title: "AV and Presentation Room",
    description: "A dedicated audio-visual facility that makes presentations more interesting, effective and engaging.",
    image: presentationRoomImage,
    alt: "Audio visual and presentation room",
  },
  {
    title: "Seminar Hall",
    description:
      "Our seminar hall has a seating capacity of 100. Seminars, lectures and workshops on various topics are conducted here regularly.",
    image: seminarHallImage,
    alt: "Seminar hall at Mandke College",
  },
];

export function LibraryPage() {
  return (
    <>
      <Helmet>
        <title>Library & Infrastructure - Mandke College | Knowledge Resource Center</title>
        <meta
          name="description"
          content="Explore the Smt. Sudhatai Mandke College Library, Knowledge Resource Center, classrooms, labs, gymnasium, AV room, seminar hall, services, OPAC, timings, and rules."
        />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-primary text-white">
        <img
          src={libraryImage}
          alt="Library and Knowledge Resource Center at Smt. Sudhatai Mandke College"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/95 to-primary/65" />
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Infrastructure</p>
          <p className="mt-3 font-heading text-xl font-semibold text-white/85">Knowledge Resource Center</p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-6xl">Library</h1>
          <blockquote className="mt-6 max-w-3xl border-l-4 border-accent pl-5 text-lg leading-relaxed text-white/90 md:text-xl">
            A well-equipped and well-managed library is the foundation of modern educational structure. The importance
            of library in education can be appreciated properly and precisely only if we try to understand the changing
            concepts of education. Today, education bereft of library service is like a body without soul.
            <footer className="mt-3 text-sm font-bold uppercase tracking-wider text-amber-300">
              The College Library Manual
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-section py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Campus Infrastructure</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">
              Facilities designed for student growth
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-textSecondary">
              Explore the learning spaces, student amenities and academic facilities available across the college.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INFRASTRUCTURE_FACILITIES.map((facility, index) => (
              <article
                key={facility.title}
                className="group overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-56 overflow-hidden bg-primary/10">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">{facility.description}</p>
                  {index === 0 ? (
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold text-accent">
                      <MapPin className="h-4 w-4" aria-hidden />
                      Paud Road, Kothrud, Pune
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Facilities & Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">
            An extensive center for learning and research
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-textSecondary">
            Smt. Sudhatai Mandke College has an extensive Library and Knowledge Resource Center for students and staff.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIBRARY_STATS.map((stat) => (
            <article key={stat.label} className="rounded-btn border border-borderSoft bg-white p-5 shadow-card">
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-textSecondary">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
          <div className="flex items-center gap-3">
            <LibraryBig className="h-8 w-8 text-accent" aria-hidden />
            <h2 className="font-heading text-2xl font-bold text-primary">Library Services</h2>
          </div>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-textSecondary md:grid-cols-2">
            {LIBRARY_SERVICES.map((service) => (
              <li key={service} className="flex gap-3 rounded-btn bg-section px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://smcc.vriddhionline.com/DataCenter_01OnlineOPAC.aspx?UniqueID=ST_MANDKE"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:brightness-105"
          >
            OPAC - VRIDHHI Software
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <ExternalLink className="h-7 w-7 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Subscriptions to Online Publications</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {ONLINE_PUBLICATIONS.map((publication) => (
                <a
                  key={publication.href}
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-btn bg-section px-4 py-3 text-sm font-bold text-accent hover:underline"
                >
                  {publication.label}
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
            <div className="flex items-center gap-3">
              <Printer className="h-7 w-7 text-accent" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-primary">Commerce and Language Lab</h2>
            </div>
            <p className="mt-5 leading-relaxed text-textSecondary">
              Commerce Lab is set up to showcase charts and projects made by the students.
            </p>
            <p className="mt-4 leading-relaxed text-textSecondary">
              The Language Lab houses books and CDs in many languages. Students make full use of the same for either
              honing their language skills or learning a new language just for fun.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-section py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article id="hours" className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-accent" aria-hidden />
                <h2 className="font-heading text-2xl font-bold text-primary">Timing</h2>
              </div>
              <div className="mt-6 space-y-3">
                {TIMINGS.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 rounded-btn bg-section px-4 py-3">
                    <span className="font-semibold text-primary">{item.day}</span>
                    <span className="text-sm text-textSecondary">{item.hours}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-accent" aria-hidden />
                <h2 className="font-heading text-2xl font-bold text-primary">Library Rules</h2>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-textSecondary">
                {LIBRARY_RULES.map((rule) => (
                  <li key={rule} className="rounded-btn bg-section px-4 py-3">
                    {rule}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>


    </>
  );
}
