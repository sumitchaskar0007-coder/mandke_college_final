import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BookOpen, Calendar, Newspaper } from "lucide-react";
import { api } from "../api/client";
import flyerImage from "../assets/images/flyer.jpeg";
import layerImage from "../assets/images/layer-optimized.png";
import radhikaImage from "../assets/images/radhika-optimized.jpg";
import careerReadinessImage from "../assets/images/career-readiness.jpg";
import accountingAnalyticsImage from "../assets/images/accounting-analytics.jpg";
import admissionsGuidanceImage from "../assets/images/admissions-guidance.jpg";
import { CourseCards } from "../components/home/CourseCards";
import { PlacementsSection } from "../components/home/PlacementsSection";
import { TestimonialsCarousel } from "../components/home/TestimonialsCarousel";
import { HomeGalleryGrid, GallerySectionFooter } from "../components/home/HomeGalleryGrid";
const FLYER_IMAGE = flyerImage;
const LAYER_IMAGE = layerImage;
const RADHIKA_IMAGE = radhikaImage;
const DEFAULT_HIGHLIGHTS = [
    { title: "Building Competence & Mindset", body: "B.Com designed for practical skills, confidence, and industry readiness." },
    { title: "Employment Focused", body: "Career guidance, internships, and placement support from day one." },
    { title: "Student-Centred Learning", body: "Commerce education supported by mentoring and practical development." },
    { title: "Focused B.Com Pathway", body: "Specialized commerce education with holistic development." },
    { title: "Your Goal | Our Mission - BETTER YOU", body: "Personalized learning pathways to help every student discover their potential." },
    { title: "Established in 2002", body: "A continuing commitment to accessible, career-focused commerce education." },
];
const DEFAULT_ANNOUNCEMENTS = [
    {
        _id: "admission-open",
        title: "Admissions open for B.Com FY/SY/TY 2026-27",
        body: "Apply online or connect with the admissions team for counselling and document guidance.",
        type: "Admissions",
        isPinned: true,
    },
    {
        _id: "campus-visit",
        title: "Campus visits and counselling slots available",
        body: "Meet faculty, understand the B.Com pathway, and explore placement support.",
        type: "Counselling",
    },
    {
        _id: "silver-jubilee",
        title: "Silver Jubilee journey toward 2027",
        body: "Celebrating a legacy of commerce education, student confidence, and community impact.",
        type: "Milestone",
    },
];
const DEFAULT_EVENTS = [
    { _id: "orientation", title: "B.Com Orientation and Parent Interaction", date: "2026-06-15", venue: "Mandke College Campus" },
    { _id: "career", title: "Career Readiness Workshop", date: "2026-06-22", venue: "Seminar Hall" },
    { _id: "visit", title: "Campus Tour and Admissions Counselling", date: "2026-06-29", venue: "Admissions Office" },
];
const HERO_PROMISES = [
    "Established in 2002",
    "Career path through multidisciplinary modules",
    "Employability-focused B.Com",
    "Life skills training",
];
const DEFAULT_BLOGS = [
    {
        _id: "career-commerce",
        title: "How a focused B.Com pathway prepares students for modern commerce careers",
        slug: "commerce-career-pathway",
        excerpt: "A practical look at academics, internships, communication, and interview readiness.",
        category: "Career Guide",
        coverImage: careerReadinessImage,
    },
    {
        _id: "accounting-skills",
        title: "Accounting, analytics, and confidence: skills every commerce student should build",
        slug: "commerce-skills",
        excerpt: "Core skill areas that help students move from classroom learning to workplace performance.",
        category: "Skill Building",
        coverImage: accountingAnalyticsImage,
    },
    {
        _id: "admission-checklist",
        title: "B.Com admissions checklist for students and parents",
        slug: "bcom-admission-checklist",
        excerpt: "Documents, questions, and campus visit tips for a smooth admissions conversation.",
        category: "Admissions",
        coverImage: admissionsGuidanceImage,
    },
];
const VISION = "To be a premier institution of need based higher education that nurtures socially responsible, globally competent, and industry-ready individuals through academic excellence, holistic development, and value-based learning.";
const MISSION = [
    "To impart relevant and quality higher education that empowers students for successful careers and meaningful lives.",
    "To foster moral, intellectual, physical, and personality development through a holistic learning environment.",
    "To implement effective and innovative teaching-learning practices that promote academic excellence and practical knowledge.",
    "To strengthen industry-institute interaction and enhance opportunities for internships, employability, and campus placements.",
    "To provide career guidance, skill development, and a conducive environment for the overall growth of students and staff.",
    "To prepare students and faculty to achieve global competence, leadership, and lifelong learning.",
];
const RADHIKA_PARAGRAPHS = [
    "Radhika Mandke-Godbole is the Managing Director of Smt. Sudhatai Mandke College and has been associated with the institution since 2014.",
    "With a student-centric and progressive approach to education, she has led several initiatives focused on holistic development, employability, and modernizing the learning environment.",
    "She has played a key role in strengthening industry-oriented learning through Mandke Institute for Learning Employable Skills (MILES), creating a direct pipeline between courses and careers through practical, skill-based training and exposure.",
    "A former professional tennis player, Radhika brings discipline, resilience, and performance-driven leadership to education management. Through her vision, Smt. Sudhatai Mandke College continues to grow as a future-focused institution committed to developing confident, skilled, and career-ready individuals.",
];
const SITE = {
    name: "Smt. Sudhatai Mandke College",
    legalName: "Mandke Human Happiness Foundation's Smt. Sudhatai Mandke College",
    url: "https://mandkecollege.com",
    phone: "+91-99229-65506",
    email: "admissions.mandkecollege@gmail.com",
    address: {
        streetAddress: "47/8, Mandke Growth Centre, Paud Road, Next to Ideal Colony Metro Station",
        addressLocality: "Kothrud, Pune",
        postalCode: "411038",
        addressCountry: "IN",
    },
};
function asArray(value) {
    return Array.isArray(value) ? value : [];
}
function hasItems(value) {
    return Boolean(value && typeof value === "object" && Array.isArray(value.items));
}
function TrustBadgeCard({ name }) {
    return (_jsx(motion.div, { whileHover: { y: -3 }, className: "flex min-h-[80px] min-w-[120px] flex-1 items-center justify-center rounded-btn border border-borderSoft bg-white px-5 py-4 text-center shadow-card transition hover:border-accent/40 hover:shadow-lg", children: _jsx("span", { className: "font-heading text-sm font-bold uppercase tracking-wide text-primary md:text-base", children: name }) }));
}
function SectionHeader({ eyebrow, title, body, }) {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: eyebrow }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl", children: title }), body ? _jsx("p", { className: "mt-3 max-w-2xl text-lg leading-relaxed text-textSecondary", children: body }) : null] }));
}
function RoadmapInfographic() {
    return (_jsx(motion.figure, { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "overflow-hidden rounded-btn bg-white p-2 shadow-sm md:p-4", children: _jsx("img", { src: FLYER_IMAGE, alt: "Mandke College roadmap flyer", className: "h-auto w-full rounded-btn object-contain", loading: "eager", decoding: "async" }) }));
}
function HeroPromiseBox() {
    const cardLayouts = [
        "lg:col-start-1 lg:col-span-3 lg:row-start-1",
        "lg:col-start-4 lg:col-span-3 lg:row-start-1",
        "lg:col-start-1 lg:col-span-3 lg:row-start-2",
        "lg:col-start-4 lg:col-span-3 lg:row-start-2",
    ];
    return (_jsx(motion.div, { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:min-h-[430px] lg:grid-cols-6 lg:grid-rows-2 lg:content-center lg:items-stretch", children: HERO_PROMISES.map((point, index) => (_jsx(motion.div, { whileHover: { y: -6, boxShadow: "0 18px 40px rgba(23,55,94,0.22)" }, className: `flex min-h-[132px] items-center justify-center rounded-btn border border-white/35 bg-white/20 p-5 text-center text-white shadow-card backdrop-blur-md transition md:min-h-[150px] md:p-6 lg:min-h-[180px] ${cardLayouts[index]}`, children: _jsx("p", { className: "mx-auto max-w-[18rem] font-heading text-xl font-bold leading-tight drop-shadow-md md:text-2xl", children: point }, point) }, point))) }));
}
export function HomePage() {
    const { data: stats } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => (await api.get("/stats")).data,
    });
    const { data: announcements } = useQuery({
        queryKey: ["announcements", "home"],
        queryFn: async () => (await api.get("/announcements?limit=3")).data,
    });
    const { data: blogs } = useQuery({
        queryKey: ["blogs", "home"],
        queryFn: async () => (await api.get("/blogs?limit=3")).data,
    });
    const { data: events } = useQuery({
        queryKey: ["events"],
        queryFn: async () => (await api.get("/events")).data,
    });
    const { data: testimonials } = useQuery({
        queryKey: ["testimonials"],
        queryFn: async () => (await api.get("/testimonials?limit=12")).data,
    });
    const { data: gallery } = useQuery({
        queryKey: ["gallery", "home"],
        queryFn: async () => (await api.get("/gallery?limit=8")).data,
    });
    const { data: galleryCategories } = useQuery({
        queryKey: ["gallery", "categories"],
        queryFn: async () => (await api.get("/gallery/categories")).data,
    });
    const { data: contentRows } = useQuery({
        queryKey: ["content", "home"],
        queryFn: async () => (await api.get("/content/home")).data,
    });
    const contentList = asArray(contentRows);
    const testimonialsList = asArray(testimonials);
    const galleryList = asArray(gallery);
    const galleryCategoryList = asArray(galleryCategories);
    const eventList = asArray(events);
    const announcementList = hasItems(announcements) ? announcements.items : [];
    const blogList = hasItems(blogs) ? blogs.items : [];
    const highlightsBlock = contentList.find((c) => c.section === "highlights")?.data;
    const highlights = highlightsBlock?.items?.length ? highlightsBlock.items : DEFAULT_HIGHLIGHTS;
    const s = stats || {};
    const visibleAnnouncements = announcementList.length ? announcementList : DEFAULT_ANNOUNCEMENTS;
    const visibleEvents = eventList.length ? eventList : DEFAULT_EVENTS;
    const visibleBlogs = blogList.length ? blogList : DEFAULT_BLOGS;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["EducationalOrganization", "CollegeOrUniversity"],
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.streetAddress,
            addressLocality: SITE.address.addressLocality,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.addressCountry,
        },
        description: "B.Com college affiliated to Savitribai Phule Pune University (SPPU), NAAC accredited. Tagline: Your Goal | Our Mission - Better You.",
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Mandke College | Your Goal | Our Mission | Better You | B.Com SPPU Pune" }), _jsx("meta", { name: "description", content: "NAAC accredited B.Com at Smt. Sudhatai Mandke College, Pune - SPPU affiliated, placement-focused, Silver Jubilee legacy. Admissions 2026-27." }), _jsx("meta", { name: "keywords", content: "Mandke College, B.Com Pune, SPPU commerce, NAAC college Pune, admissions 2026, Sudhatai Mandke College, career tips commerce" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })] }), _jsxs("section", { className: "relative isolate overflow-hidden py-6 text-textPrimary md:py-8", children: [_jsx("img", { src: LAYER_IMAGE, alt: "", "aria-hidden": "true", className: "absolute inset-0 -z-20 h-full w-full object-cover", loading: "eager", decoding: "async" }), _jsx("div", { className: "absolute inset-0 -z-10 bg-primary/65", "aria-hidden": "true" }), _jsxs("div", { className: "mx-auto grid max-w-[82rem] gap-7 px-4 lg:grid-cols-[1.12fr_0.88fr] lg:items-center", children: [_jsx(RoadmapInfographic, {}), _jsx(HeroPromiseBox, {})] })] }), _jsx("section", { className: "bg-section py-6 md:py-8", children: _jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center", children: [_jsx("figure", { className: "overflow-hidden rounded-btn border border-borderSoft bg-white shadow-lift", children: _jsx("img", { src: RADHIKA_IMAGE, alt: "Radhika Mandke-Godbole", className: "h-full max-h-[520px] w-full object-cover object-top", loading: "lazy", decoding: "async" }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Leadership" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl", children: "Radhika Mandke-Godbole" }), _jsx("p", { className: "mt-2 text-lg font-semibold text-primary", children: "Managing Director" }), _jsx("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-textSecondary md:text-lg", children: RADHIKA_PARAGRAPHS.map((paragraph) => (_jsx("p", { children: paragraph }, paragraph))) })] })] }) }), _jsx(CourseCards, {}), _jsx(PlacementsSection, {}), _jsx("section", { className: "bg-gradient-to-b from-section via-white to-section py-8 md:py-10", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [_jsx(SectionHeader, { eyebrow: "Stories", title: "Hear from students and alumni", body: "Video journeys, star-rated experiences, and candid reflections from learners who grew with us." }), _jsx(Link, { to: "/blog", className: "inline-flex min-h-[48px] items-center font-bold text-accent hover:underline", children: "Read career articles" })] }), _jsx("div", { className: "mt-8", children: _jsx(TestimonialsCarousel, { items: testimonialsList }) })] }) }), _jsx("section", { className: "border-y border-borderSoft bg-white py-7 md:py-9", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4 text-center", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Accreditation and partners" }), _jsx("h2", { className: "mt-2 font-heading text-2xl font-bold text-primary md:text-3xl", children: "Recognised. Audited. University-aligned." }), _jsx("div", { className: "mt-7 flex flex-wrap justify-center gap-3 md:gap-4", children: (s.trustBadges || ["NAAC", "SPPU", "AISHE", "NIRF", "ISO-ready"]).map((name) => (_jsx(TrustBadgeCard, { name: name }, name))) })] }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-8 md:py-10", children: [_jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [_jsx("h2", { className: "font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl", children: "Announcements" }), _jsx(Link, { to: "/announcements", className: "min-h-[44px] text-base font-bold text-accent hover:underline", children: "View all" })] }), _jsx("ul", { className: "mt-6 space-y-3", children: visibleAnnouncements.map((a) => (_jsxs(motion.li, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "flex flex-wrap items-start gap-3 rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:shadow-md", children: [a.isPinned ? _jsx(Newspaper, { className: "mt-1 h-5 w-5 text-accent", "aria-hidden": true }) : null, _jsx("span", { className: "rounded-btn bg-section px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary", children: a.type || "Update" }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: "font-heading text-lg font-semibold text-primary", children: a.title }), a.body ? _jsx("p", { className: "mt-1 line-clamp-2 text-textSecondary", children: a.body }) : null] })] }, a._id))) })] }), _jsx("section", { className: "bg-gradient-to-b from-section to-white py-8 md:py-10", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [_jsx("h2", { className: "font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl", children: "Campus calendar" }), _jsx(Link, { to: "/contact", className: "min-h-[44px] text-base font-bold text-accent hover:underline", children: "Plan a visit" })] }), _jsx("div", { className: "mt-6 flex gap-4 overflow-x-auto pb-2 pt-1 [-webkit-overflow-scrolling:touch]", children: visibleEvents.slice(0, 6).map((ev) => (_jsxs("article", { className: "min-w-[260px] shrink-0 rounded-btn border border-borderSoft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lg md:min-w-[300px]", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-accent", children: [_jsx(Calendar, { className: "h-4 w-4" }), ev.date ? new Date(ev.date).toLocaleDateString() : "TBC"] }), _jsx("h3", { className: "mt-3 font-heading text-lg font-bold text-primary", children: ev.title }), ev.venue ? _jsx("p", { className: "mt-2 text-sm text-textSecondary", children: ev.venue }) : null] }, ev._id))) })] }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-8 md:py-10", children: [_jsx("div", { className: "mx-auto max-w-3xl text-center", children: _jsx(SectionHeader, { eyebrow: "Why Mandke", title: "A college experience built around the whole student" }) }), _jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: highlights.map((h, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, viewport: { once: true }, whileHover: { y: -4 }, className: "flex h-full flex-col rounded-btn border border-borderSoft bg-white p-6 shadow-card transition hover:shadow-lg", children: [_jsx(BookOpen, { className: "h-8 w-8 text-accent" }), _jsx("h3", { className: "mt-4 font-heading text-xl font-bold text-primary", children: h.title }), _jsx("p", { className: "mt-2 text-base leading-relaxed text-textSecondary", children: h.body })] }, h.title))) })] }), _jsx("section", { className: "bg-gradient-to-br from-primary via-[#152a66] to-dark py-6 text-white md:py-8", children: _jsxs("div", { className: "mx-auto grid max-w-6xl gap-7 px-4 lg:grid-cols-2 lg:gap-10", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Vision" }), _jsx("h2", { className: "mt-2 font-heading text-2xl font-bold md:text-3xl", children: "Where competence meets character" }), _jsx("p", { className: "mt-3 text-base leading-relaxed text-slate-200", children: VISION })] }), _jsxs("div", { className: "rounded-btn border border-white/15 bg-white/5 p-4 backdrop-blur-md md:p-5", children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Mission" }), _jsx("ol", { className: "mt-3 space-y-2.5 text-sm leading-snug text-slate-200", children: MISSION.map((m, idx) => (_jsxs("li", { className: "flex gap-2.5", children: [_jsx("span", { className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white", children: String.fromCharCode(97 + idx) }), _jsx("span", { children: m })] }, idx))) })] })] }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-4 py-8 md:py-10", children: [_jsx("div", { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: _jsx(SectionHeader, { eyebrow: "Life at Mandke", title: "Gallery and reels", body: "Campus moments, events, student activities, and celebration highlights." }) }), _jsx("div", { className: "mt-8", children: _jsx(HomeGalleryGrid, { items: galleryList, categories: galleryCategoryList }) }), _jsx(GallerySectionFooter, {})] }), _jsx("section", { className: "bg-section py-8 md:py-10", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Weekly insights" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold text-primary md:text-4xl", children: "Career tips and commerce trends" })] }), _jsx(Link, { to: "/blog", className: "min-h-[44px] text-base font-bold text-accent hover:underline", children: "View all articles" })] }), _jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-3", children: visibleBlogs.map((b) => (_jsxs(Link, { to: `/blog/${b.slug}`, className: "group flex h-full flex-col overflow-hidden rounded-btn border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl", children: [b.coverImage ? (_jsx("img", { src: b.coverImage.includes("cloudinary") ? b.coverImage.replace("/upload/", "/upload/w_800,f_webp,q_auto/") : b.coverImage, alt: "", className: "h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]", loading: "lazy", decoding: "async" })) : (_jsx("div", { className: "flex h-48 items-center justify-center bg-gradient-to-br from-primary to-[#0b2556] text-white", children: _jsx(BookOpen, { className: "h-12 w-12 text-amber-300", "aria-hidden": true }) })), _jsxs("div", { className: "flex flex-1 flex-col p-5", children: [_jsx("span", { className: "text-xs font-bold uppercase text-accent", children: b.category || "Insight" }), _jsx("h3", { className: "mt-2 font-heading text-lg font-bold text-primary group-hover:text-accent", children: b.title }), b.excerpt ? _jsx("p", { className: "mt-2 line-clamp-3 flex-1 text-sm text-textSecondary", children: b.excerpt }) : null] })] }, b._id))) })] }) }), _jsx("section", { className: "bg-white py-8 md:py-10", children: _jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [_jsx("h2", { className: "font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl", children: "Ready to begin your journey?" }), _jsx("p", { className: "mt-5 text-lg text-textSecondary", children: "Admissions open for 2026-27. Choose Mandke College for a B.Com experience that is guided, practical, and future-ready." }), _jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [_jsx(Link, { to: "/admissions", className: "inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-bold text-white shadow-lg", children: "Apply now" }), _jsx(Link, { to: "/commerce", className: "inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn border-2 border-primary px-8 py-3.5 text-base font-bold text-primary", children: "Brochure" }), _jsx(Link, { to: "/contact", className: "inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-btn bg-primary px-8 py-3.5 text-base font-bold text-white", children: "Contact admissions" })] })] }) })] }));
}
