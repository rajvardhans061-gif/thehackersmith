const stats = [
  { value: "30,000+", label: "Learners Trained" },
  { value: "400+", label: "International Learners" },
  { value: "4+", label: "Years Training Experience" },
  { value: "100+", label: "Technology Workshops" },
];

export default function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="relative border-y border-cyan-400/10 bg-[#06131d]/45"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.035),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="shell relative py-10 md:py-12">
        <dl className="grid grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative px-4 py-2 text-center md:px-6 md:text-left ${
                index !== 0
                  ? "border-l border-white/[0.06]"
                  : ""
              }`}
            >
              <dd className="text-3xl font-bold tracking-tight text-[#00e5ff] sm:text-4xl md:text-[2.6rem]">
                {stat.value}
              </dd>

              <dt className="mt-2 text-xs font-medium text-[#8f9fa8] sm:text-sm">
                {stat.label}
              </dt>

              {/* Small accent */}
              <div className="mt-4 hidden h-px w-8 bg-cyan-400/30 md:block" />
            </div>
          ))}

        </dl>
      </div>
    </section>
  );
}