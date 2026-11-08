import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/917600346780?text=Hello%20The%20Hacker%20Smith%2C%20I%20have%20a%20question%20about%20your%20programs.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Hacker Smith on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
