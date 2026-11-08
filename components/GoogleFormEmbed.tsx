
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe-ngVlzPiuS-MhTYrXDd9F5hAKwcDeqawEBK3DaNDwzV4Plg/viewform?embedded=true";

export default function GoogleFormEmbed() {
  return (
    <section className="mx-auto w-full max-w-[900px] rounded-2xl border border-white/10 bg-[#07111F] p-2 shadow-2xl sm:p-4">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <iframe
          src={GOOGLE_FORM_URL}
          title="The Hacker Smith Program Enrollment"
          width="100%"
          height="1500"
          className="block w-full border-0"
          loading="lazy"
        />
      </div>
      <p className="px-2 pb-1 pt-3 text-center text-xs leading-5 text-slate-400">
        Your information is submitted securely through our Google enrollment form.
      </p>
    </section>
  );
}
