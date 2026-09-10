import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import classroomImage from "../assets/images/class.png";
import parentImage from "../assets/images/parent.png";
import teacherImage from "../assets/images/teacher.png";
export function SimpleContentPage({ title, children, }) {
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [title, " \u2014 Mandke College"] }) }), _jsx("section", { className: "mx-auto max-w-3xl px-4 py-8 text-textSecondary", children: children })] }));
}
export function DistanceEducationPage() {
    return (_jsx(SimpleContentPage, { title: "Distance Education", children: _jsxs("p", { children: ["Detailed procedures, links, and FAQs can be managed from the admin CMS. For admissions counselling, visit the", " ", _jsx(Link, { to: "/admissions", className: "font-semibold text-accent hover:underline", children: "Admissions" }), " ", "section."] }) }));
}
export function IQACPage() {
    return (_jsx(SimpleContentPage, { title: "IQAC", children: _jsx("p", { children: "IQAC documents, AQAR links, and best practices will appear here as they are published through the CMS." }) }));
}
export function LibraryPage() {
    return (_jsx(SimpleContentPage, { title: "Library", children: _jsx("p", { children: "Timings, OPAC links, e-resources, and new arrivals will be updated by administrators." }) }));
}
export function ActivitiesPage() {
    return (_jsx(SimpleContentPage, { title: "Activities", children: _jsx("p", { children: "Photos, reports, and upcoming activities will be published from the gallery and CMS." }) }));
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
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Our Stakeholders - Mandke College" }) }), _jsx("section", { className: "bg-section py-10 md:py-12", children: _jsx("div", { className: "mx-auto max-w-6xl px-4", children: _jsx("div", { className: "grid gap-8", children: stakeholders.map((stakeholder, index) => (_jsxs("article", { className: "grid gap-6 rounded-btn border border-borderSoft bg-white p-5 shadow-card md:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [_jsx("figure", { className: `${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden rounded-btn border border-borderSoft bg-section`, children: _jsx("img", { src: stakeholder.image, alt: stakeholder.title, className: "h-64 w-full object-cover md:h-80", loading: "lazy", decoding: "async" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-bold uppercase tracking-widest text-accent", children: "Stakeholder" }), _jsx("h2", { className: "mt-2 font-heading text-3xl font-bold text-primary", children: stakeholder.title }), _jsx("div", { className: "mt-5 space-y-4 text-base leading-relaxed text-textSecondary md:text-lg", children: stakeholder.paragraphs.map((paragraph) => (_jsx("p", { children: paragraph }, paragraph))) })] })] }, stakeholder.title))) }) }) })] }));
}
export function AlumniPage() {
    return (_jsx(SimpleContentPage, { title: "Alumni", children: _jsx("p", { children: "Alumni stories and registration will be wired to dedicated forms and workflows in a future iteration." }) }));
}
export function MHHFPage() {
    const highlights = [
        {
            title: "Industry-Relevant Training",
            description: "Industry-relevant courses in collaboration with companies designed for job readiness; curated by industry experts to ensure alignment with current market trends.",
        },
        {
            title: "Hands-On Experience",
            description: "Curriculum designed and taught by industry experts, aligned with current market trends. Live projects and real-world applications prepare students for immediate job readiness.",
        },
        {
            title: "Diverse Career Paths",
            description: "Hands-on experience with live projects and training in diverse fields like food, finance, fashion, IT, and digital marketing, designed for career advancement in chosen areas.",
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Mandke Human Happiness Foundation - Mandke College" }) }), _jsx("section", { className: "bg-section py-10 md:py-12", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsx("p", { className: "mx-auto max-w-3xl text-center text-base leading-relaxed text-textSecondary md:text-lg", children: "Foundation programmes and impact stories are showcased through Mandke Skills." }), _jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-3", children: highlights.map((highlight, index) => (_jsxs("article", { className: "rounded-btn border border-borderSoft bg-white p-6 shadow-card", children: [_jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 font-heading text-lg font-bold text-accent", children: index + 1 }), _jsx("h2", { className: "mt-5 font-heading text-xl font-bold text-primary", children: highlight.title }), _jsx("p", { className: "mt-3 leading-relaxed text-textSecondary", children: highlight.description })] }, highlight.title))) }), _jsx("div", { className: "mt-8 text-center", children: _jsx("a", { href: "https://www.mandkeskills.com", target: "_blank", rel: "noreferrer noopener", className: "inline-flex min-h-[48px] items-center justify-center rounded-btn bg-accent px-8 py-3 font-bold text-white shadow-md transition hover:bg-amber-600", children: "Apply Now" }) })] }) })] }));
}
