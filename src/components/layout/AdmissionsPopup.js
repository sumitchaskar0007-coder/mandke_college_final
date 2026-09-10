import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        if (!open)
            return;
        const onKeyDown = (event) => {
            if (event.key === "Escape")
                closePopup();
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
    if (!open)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm", role: "presentation", onMouseDown: (event) => {
            if (event.target === event.currentTarget)
                closePopup();
        }, children: _jsxs("section", { role: "dialog", "aria-modal": "true", "aria-labelledby": "admissions-popup-title", className: "relative w-full max-w-lg overflow-hidden rounded-card bg-[#f8fbff] shadow-2xl", children: [_jsx("button", { type: "button", onClick: closePopup, className: "absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white", "aria-label": "Close admissions popup", children: _jsx(X, { className: "h-5 w-5", "aria-hidden": true }) }), _jsxs("header", { className: "bg-gradient-to-r from-primary to-[#1768c4] px-6 py-5 text-center text-white", children: [_jsx("h2", { id: "admissions-popup-title", className: "font-heading text-2xl font-bold", children: "Admissions Open 2026-27" }), _jsx("p", { className: "mt-1 text-sm font-medium text-white/90", children: "Start Your Journey from Qualification to Competence!" })] }), _jsxs("div", { className: "space-y-4 p-5 sm:p-6", children: [_jsxs("article", { className: "rounded-card border border-sky-300 bg-sky-100/80 p-4 shadow-sm", children: [_jsx("h3", { className: "font-heading text-xl font-bold text-primary", children: "B.Com Program" }), _jsx("p", { className: "text-sm text-textSecondary", children: "Bachelor of Commerce (SPPU Affiliated)" }), _jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [_jsxs("div", { className: "rounded-btn bg-white/90 px-3 py-2", children: [_jsx("p", { className: "text-xs text-textSecondary", children: "Duration" }), _jsx("p", { className: "font-bold text-primary", children: "3 Years" })] }), _jsxs("div", { className: "rounded-btn bg-white/90 px-3 py-2", children: [_jsx("p", { className: "text-xs text-textSecondary", children: "Eligibility" }), _jsx("p", { className: "font-bold text-primary", children: "12th Pass" })] })] }), _jsxs("ul", { className: "mt-4 space-y-2 text-sm font-medium text-primary", children: [_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600", "aria-hidden": true }), "Dedicated Placement Cell & Internships"] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600", "aria-hidden": true }), "Acquire Mastery in MS-Office & AI"] })] })] }), _jsxs("article", { className: "rounded-card border border-sky-300 bg-sky-100/80 p-4 shadow-sm", children: [_jsx("h3", { className: "font-heading text-xl font-bold text-primary", children: "NEP 2020 & Scholarships" }), _jsx("p", { className: "text-sm text-textSecondary", children: "Bachelor of Commerce (SPPU Affiliated)" }), _jsxs("ul", { className: "mt-4 space-y-2 text-sm font-medium text-primary", children: [_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600", "aria-hidden": true }), "Earn & Learn Opportunities"] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600", "aria-hidden": true }), "Multiple Entry & Exit Options"] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600", "aria-hidden": true }), "Free Education for Female Students (As per GR)"] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3 pt-1", children: [_jsx(Link, { to: "/admissions", onClick: closePopup, className: "inline-flex min-h-[46px] items-center justify-center rounded-btn bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-accent", children: "Apply Now" }), _jsx(Link, { to: "/contact#enquiry", onClick: closePopup, className: "inline-flex min-h-[46px] items-center justify-center rounded-btn border-2 border-primary bg-white px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-section", children: "Contact Us" })] })] })] }) }));
}
