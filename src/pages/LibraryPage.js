import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Clock, ExternalLink, LibraryBig, MapPin, Printer, ShieldCheck, } from "lucide-react";
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
        description: "Right next to the metro station, with a bus stop exactly opposite the premises and a convenient location near Paud Phata Flyover.",
        image: buildingImage,
        alt: "Smt. Sudhatai Mandke College building",
    },
    {
        title: "Library & Knowledge Resource Center",
        description: "An extensive library that houses books, magazines, periodicals and learning resources which keep our students gainfully engaged.",
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
        description: "A spacious computer laboratory equipped with the latest computers, software, high-speed internet, a server and UPS backup.",
        image: computerLabImage,
        alt: "Computer laboratory at Mandke College",
    },
    {
        title: "Gymnasium & Games Room",
        description: "A well-equipped gymnasium and indoor games room where students can build physical fitness and imbibe the sportsman spirit.",
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
        description: "Our seminar hall has a seating capacity of 100. Seminars, lectures and workshops on various topics are conducted here regularly.",
        image: seminarHallImage,
        alt: "Seminar hall at Mandke College",
    },
];
export function LibraryPage() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Library & Infrastructure - Mandke College | Knowledge Resource Center" }), _jsx("meta", { name: "description", content: "Explore the Smt. Sudhatai Mandke College Library, Knowledge Resource Center, classrooms, labs, gymnasium, AV room, seminar hall, services, OPAC, timings, and rules." })] }), _jsxs("section", { className: "relative isolate overflow-hidden bg-primary text-white", children: [_jsx("img", { src: libraryImage, alt: "Library and Knowledge Resource Center at Smt. Sudhatai Mandke College", className: "absolute inset-0 -z-20 h-full w-full object-cover", loading: "eager", decoding: "async" }), _jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/95 to-primary/65" }), _jsxs("div", { className: "mx-auto max-w-6xl px-4 py-14 md:py-20", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-amber-300", children: "Infrastructure" }), _jsx("p", { className: "mt-3 font-heading text-xl font-semibold text-white/85", children: "Knowledge Resource Center" }), _jsx("h1", { className: "mt-2 max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-6xl", children: "Library" }), _jsxs("blockquote", { className: "mt-6 max-w-3xl border-l-4 border-accent pl-5 text-lg leading-relaxed text-white/90 md:text-xl", children: ["A well-equipped and well-managed library is the foundation of modern educational structure. The importance of library in education can be appreciated properly and precisely only if we try to understand the changing concepts of education. Today, education bereft of library service is like a body without soul.", _jsx("footer", { className: "mt-3 text-sm font-bold uppercase tracking-wider text-amber-300", children: "The College Library Manual" })] })] })] }), _jsx("section", { className: "bg-section py-10 md:py-14", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "max-w-3xl", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Campus Infrastructure" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold text-primary md:text-4xl", children: "Facilities designed for student growth" }), _jsx("p", { className: "mt-4 text-lg leading-relaxed text-textSecondary", children: "Explore the learning spaces, student amenities and academic facilities available across the college." })] }), _jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: INFRASTRUCTURE_FACILITIES.map((facility, index) => (_jsxs("article", { className: "group overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift", children: [_jsxs("div", { className: "relative h-56 overflow-hidden bg-primary/10", children: [_jsx("img", { src: facility.image, alt: facility.alt, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy", decoding: "async" }), _jsx("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" })] }), _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "font-heading text-xl font-bold text-primary", children: facility.title }), _jsx("p", { className: "mt-3 text-sm leading-relaxed text-textSecondary", children: facility.description }), index === 0 ? (_jsxs("p", { className: "mt-4 flex items-center gap-2 text-sm font-bold text-accent", children: [_jsx(MapPin, { className: "h-4 w-4", "aria-hidden": true }), "Paud Road, Kothrud, Pune"] })) : null] })] }, facility.title))) })] }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-8 md:py-12", children: [_jsxs("div", { className: "mb-7 max-w-3xl", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Facilities & Services" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold text-primary md:text-4xl", children: "An extensive center for learning and research" }), _jsx("p", { className: "mt-4 text-lg leading-relaxed text-textSecondary", children: "Smt. Sudhatai Mandke College has an extensive Library and Knowledge Resource Center for students and staff." })] }), _jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: LIBRARY_STATS.map((stat) => (_jsxs("article", { className: "rounded-btn border border-borderSoft bg-white p-5 shadow-card", children: [_jsx("p", { className: "font-heading text-3xl font-bold text-primary", children: stat.value }), _jsx("p", { className: "mt-2 text-sm font-semibold text-textSecondary", children: stat.label })] }, stat.label))) }), _jsxs("div", { className: "mt-10 rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(LibraryBig, { className: "h-8 w-8 text-accent", "aria-hidden": true }), _jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "Library Services" })] }), _jsx("ul", { className: "mt-6 grid gap-3 text-sm leading-relaxed text-textSecondary md:grid-cols-2", children: LIBRARY_SERVICES.map((service) => (_jsxs("li", { className: "flex gap-3 rounded-btn bg-section px-4 py-3", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }), _jsx("span", { children: service })] }, service))) }), _jsxs("a", { href: "https://smcc.vriddhionline.com/DataCenter_01OnlineOPAC.aspx?UniqueID=ST_MANDKE", target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:brightness-105", children: ["OPAC - VRIDHHI Software", _jsx(ExternalLink, { className: "h-4 w-4", "aria-hidden": true })] })] })] }), _jsx("section", { className: "py-8 md:py-10", children: _jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2", children: [_jsxs("article", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ExternalLink, { className: "h-7 w-7 text-accent", "aria-hidden": true }), _jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "Subscriptions to Online Publications" })] }), _jsx("div", { className: "mt-6 grid gap-3", children: ONLINE_PUBLICATIONS.map((publication) => (_jsx("a", { href: publication.href, target: "_blank", rel: "noreferrer", className: "rounded-btn bg-section px-4 py-3 text-sm font-bold text-accent hover:underline", children: publication.label }, publication.href))) })] }), _jsxs("article", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Printer, { className: "h-7 w-7 text-accent", "aria-hidden": true }), _jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "Commerce and Language Lab" })] }), _jsx("p", { className: "mt-5 leading-relaxed text-textSecondary", children: "Commerce Lab is set up to showcase charts and projects made by the students." }), _jsx("p", { className: "mt-4 leading-relaxed text-textSecondary", children: "The Language Lab houses books and CDs in many languages. Students make full use of the same for either honing their language skills or learning a new language just for fun." })] })] }) }), _jsx("section", { className: "bg-section py-8 md:py-10", children: _jsx("div", { className: "mx-auto max-w-6xl px-4", children: _jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.8fr_1.2fr]", children: [_jsxs("article", { id: "hours", className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Clock, { className: "h-8 w-8 text-accent", "aria-hidden": true }), _jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "Timing" })] }), _jsx("div", { className: "mt-6 space-y-3", children: TIMINGS.map((item) => (_jsxs("div", { className: "flex items-center justify-between gap-4 rounded-btn bg-section px-4 py-3", children: [_jsx("span", { className: "font-semibold text-primary", children: item.day }), _jsx("span", { className: "text-sm text-textSecondary", children: item.hours })] }, item.day))) })] }), _jsxs("article", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card md:p-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ShieldCheck, { className: "h-8 w-8 text-accent", "aria-hidden": true }), _jsx("h2", { className: "font-heading text-2xl font-bold text-primary", children: "Library Rules" })] }), _jsx("ul", { className: "mt-6 space-y-3 text-sm leading-relaxed text-textSecondary", children: LIBRARY_RULES.map((rule) => (_jsx("li", { className: "rounded-btn bg-section px-4 py-3", children: rule }, rule))) })] })] }) }) })] }));
}
