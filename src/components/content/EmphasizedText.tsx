// Emphasize the important descriptive phrases supplied in the change documents.
const PHRASES = [
  "career-focused undergraduate programs",
  "Affiliated with Savitribai Phule Pune University (SPPU)",
  "National Education Policy (NEP) 2020",
  "programs provide the right platform to shape your future as per your liking and capability",
  "MILES – Mandke Institute for Learning Employable Skills",
  "Making Society Better",
  "B.COM | M.COM | BA | MA",
];
const pattern = new RegExp(`(${PHRASES.slice().sort((a,b)=>b.length-a.length).map(p=>p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})`, "g");
export function EmphasizedText({text}:{text:string}) {
  return <>{text.split(pattern).map((part,index)=>PHRASES.includes(part) ? <strong key={index}>{part}</strong> : part)}</>;
}
