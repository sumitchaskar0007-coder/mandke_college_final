import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
const QUICK_PROMPTS = [
    "Admissions",
    "Courses",
    "B.Com",
    "Location",
    "Scholarship",
    "Timing",
    "Documents",
    "WhatsApp",
];
const ANSWERS = [
    {
        keywords: ["admission", "apply", "form", "enroll"],
        text: "Admissions are open for FY/SY/TY B.Com 2026-27. Click APPLY NOW on the Home page, or contact the office on +91 9577060606 for help.",
    },
    {
        keywords: ["course", "courses", "program"],
        text: "The college offers a Savitribai Phule Pune University (SPPU) affiliated, full-time, placement-focused B.Com graduation degree.",
    },
    {
        keywords: ["b.com", "bcom", "commerce"],
        text: "At Mandke College, B.Com means Building Competence and Mindset. A versatile B.Com degree, along with the right skill development, will help students secure a dream job or step confidently into self-employment or entrepreneurship.",
    },
    {
        keywords: ["document", "documents", "certificate", "marksheet", "photo"],
        text: "Common admission documents include the latest marksheet, leaving/transfer certificate, ID proof, 2 photos, caste certificate, or scholarship documents if applicable.",
    },
    {
        keywords: ["scholarship", "concession", "category"],
        text: "The College will assist students in acquiring all applicable Government Scholarships.",
    },
    {
        keywords: ["location", "address", "metro", "bus", "drive"],
        text: "The college is at a most convenient location, easily accessible by Metro, Bus, or Self Drive, right next to Ideal Colony Metro Station.",
    },
    {
        keywords: ["whatsapp", "message"],
        text: "Scan the QR code below to chat with Mandke College on WhatsApp at +91 9577060606.",
        showWhatsAppQr: true,
    },
    {
        keywords: ["time", "hours", "timing", "timings", "open"],
        text: "College timings are 7:30 am - 1:30 pm. Office hours are Monday to Saturday, 9:00 am to 5:00 pm. Please call 9922965506 before visiting to confirm holiday schedules.",
    },
];
function createReply(input) {
    const normalized = input.toLowerCase();
    const answer = ANSWERS.find((item) => item.keywords?.some((keyword) => normalized.includes(keyword)));
    return answer || {
        text: "I can help with admissions, courses, B.Com, location, scholarships, timings, documents, and WhatsApp. Please choose a question below or call +91 9577060606.",
    };
}
export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            from: "bot",
            text: "Hello! I am the Mandke College chatbot. Ask me about admissions, courses, B.Com, location, scholarships, timings, documents, or WhatsApp.",
        },
    ]);
    const sendMessage = (text) => {
        const cleanText = text.trim();
        if (!cleanText)
            return;
        setMessages((current) => {
            const nextId = current.length + 1;
            const reply = createReply(cleanText);
            return [
                ...current,
                { id: nextId, from: "user", text: cleanText },
                { id: nextId + 1, from: "bot", text: reply.text, showWhatsAppQr: reply.showWhatsAppQr },
            ];
        });
        setInput("");
        setIsOpen(true);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage(input);
    };
    return (_jsx("div", { className: "fixed bottom-[5.75rem] left-5 z-[56] md:bottom-24 md:left-auto md:right-5", children: isOpen ? (_jsxs("section", { className: "w-[min(calc(100vw-2.5rem),23rem)] overflow-hidden rounded-btn border border-borderSoft bg-white shadow-lift", "aria-label": "Mandke College chatbot", children: [_jsxs("div", { className: "flex items-center justify-between bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-3 text-white", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Bot, { className: "h-5 w-5", "aria-hidden": true }), _jsx("p", { className: "text-sm font-bold", children: "College Chatbot" })] }), _jsx("button", { type: "button", onClick: () => setIsOpen(false), className: "inline-flex h-9 w-9 items-center justify-center rounded-btn text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white", "aria-label": "Close chatbot", children: _jsx(X, { className: "h-5 w-5", "aria-hidden": true }) })] }), _jsx("div", { className: "max-h-80 space-y-3 overflow-y-auto bg-section px-4 py-4", children: messages.map((message) => (_jsx("div", { className: `flex ${message.from === "user" ? "justify-end" : "justify-start"}`, children: _jsxs("div", { className: `max-w-[85%] rounded-btn px-3 py-2 text-sm leading-relaxed shadow-sm ${message.from === "user" ? "bg-orange-600 text-white" : "bg-white text-textPrimary"}`, children: [_jsx("p", { children: message.text }), message.showWhatsAppQr ? (_jsxs("a", { href: "https://wa.me/919577060606", target: "_blank", rel: "noreferrer noopener", className: "mt-3 block rounded-btn border border-orange-200 bg-white p-2 text-center font-bold text-orange-700", children: [_jsx("img", { src: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fwa.me%2F919577060606", alt: "WhatsApp QR code for Mandke College", className: "mx-auto h-40 w-40", loading: "lazy" }), _jsx("span", { className: "mt-2 block", children: "Open WhatsApp" })] })) : null] }) }, message.id))) }), _jsxs("div", { className: "border-t border-borderSoft bg-white p-3", children: [_jsx("div", { className: "mb-3 flex max-h-28 flex-wrap gap-2 overflow-y-auto pr-1", children: QUICK_PROMPTS.map((prompt) => (_jsx("button", { type: "button", onClick: () => sendMessage(prompt), className: "rounded-btn border border-orange-300 px-3 py-1.5 text-xs font-bold text-orange-700 hover:border-orange-600 hover:bg-orange-50", children: prompt }, prompt))) }), _jsxs("form", { onSubmit: onSubmit, className: "flex gap-2", children: [_jsx("label", { htmlFor: "chatbot-message", className: "sr-only", children: "Chat message" }), _jsx("input", { id: "chatbot-message", value: input, onChange: (event) => setInput(event.target.value), placeholder: "Type your question", className: "min-h-[44px] min-w-0 flex-1 rounded-btn border border-borderSoft px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" }), _jsx("button", { type: "submit", className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400", "aria-label": "Send message", children: _jsx(Send, { className: "h-5 w-5", "aria-hidden": true }) })] })] })] })) : (_jsxs("button", { type: "button", onClick: () => setIsOpen(true), className: "group inline-flex flex-col items-center gap-1 text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400", "aria-label": "Open college chatbot", children: [_jsx("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-amber-400 text-white shadow-card ring-2 ring-white transition group-hover:scale-105", children: _jsx(MessageCircle, { className: "h-6 w-6", "aria-hidden": true }) }), _jsx("span", { className: "rounded-badge bg-white px-2 py-0.5 text-xs font-extrabold shadow-sm", children: "Chatbot" })] })) }));
}
