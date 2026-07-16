import { createFileRoute } from "@tanstack/react-router";
import heroPattern from "../assets/hero-pattern.jpg";

const CHECKOUT_URL = "https://buy.stripe.com/00w28r64adj736mdTAaIM01";
const ENQUIRE_URL = "https://forms.gle/Z1eraUFseJmxwrLo8";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function CtaPair({
  payLabel = "Enrol now",
  enquireLabel = "Enquire",
  align = "start",
}: {
  payLabel?: string;
  enquireLabel?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      <a
        href={CHECKOUT_URL}
        className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium tracking-wide text-mist transition-colors hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
      >
        {payLabel}
        <span aria-hidden className="ml-2">→</span>
      </a>
      <a
        href={ENQUIRE_URL}
        className="inline-flex items-center justify-center rounded-md border border-ink/20 bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
      >
        {enquireLabel}
      </a>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  children,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  tone?: "light" | "mist" | "ink";
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-mist"
      : tone === "mist"
        ? "bg-mist text-ink"
        : "bg-background text-ink";
  return (
    <section id={id} className={`${toneClass} w-full`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {eyebrow && (
          <p
            className={`mb-6 text-xs font-medium uppercase tracking-[0.2em] ${
              tone === "ink" ? "text-gold" : "text-blue"
            }`}
          >
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#top" className="font-display text-lg text-mist">
            Decode UCAT
          </a>
          <nav className="hidden gap-8 text-sm text-mist/80 md:flex">
            <a href="#approach" className="hover:text-mist">Approach</a>
            <a href="#course" className="hover:text-mist">Course</a>
            <a href="#about" className="hover:text-mist">About</a>
          </nav>
          <a
            href={ENQUIRE_URL}
            className="rounded-md border border-mist/30 px-4 py-2 text-sm text-mist transition-colors hover:bg-mist hover:text-ink"
          >
            Enquire
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative w-full overflow-hidden bg-ink text-mist">
        <img
          src={heroPattern}
          alt=""
          aria-hidden
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-40 md:pb-40 md:pt-48">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            2560 / 2700 · Band 1 · Top 1% globally · Malaysia → UK
          </p>
          <h1 className="font-display text-4xl leading-[1.1] md:text-6xl">
            The UCAT isn't random.
            <br />
            <span className="italic text-mist/85">There are patterns. I'll teach you them.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist/75">
            Incoming first-year medic at Imperial College London, with offers from UCL and King's as
            an international student from Malaysia. I scored 2560/2700 with Band 1 in my 2025 UCAT
            — comfortably inside the top 1% globally. Now I'm teaching the exact techniques I used
            to get there.
          </p>

          {/* Course announcement banner */}
          <div className="mt-10 rounded-lg border border-gold/40 bg-gold/10 p-6 md:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Next intensive course · August 1 · 9am–4pm
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-mist md:text-3xl">
              One day. Every technique I used to score in the top 1%.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mist/80">
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Unlimited WhatsApp support after the course until your exam</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Full refund if you don't get any interviews</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center rounded-md bg-mist px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-white"
              >
                Reserve your seat — Aug 1
                <span aria-hidden className="ml-2">→</span>
              </a>
              <a
                href={ENQUIRE_URL}
                className="inline-flex items-center justify-center rounded-md border border-mist/40 px-7 py-3.5 text-sm font-medium tracking-wide text-mist transition-colors hover:bg-mist/10"
              >
                Enquire
              </a>
            </div>
          </div>


          <dl className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-mist/15 pt-10">
            {[
              { k: "2560", v: "UCAT score (2025)" },
              { k: "Band 1", v: "Situational Judgement" },
              { k: "Top 1%", v: "Globally" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl text-mist md:text-4xl">{s.k}</dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-mist/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Approach */}
      <Section id="approach" eyebrow="The approach">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Even a test built to be unpredictable{" "}
              <span className="italic text-blue">has patterns you can exploit.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">
              Everyone treats the UCAT as chaos — a scramble against the clock with no way to
              prepare properly. That's wrong. Underneath the surface, question types repeat,
              distractors repeat, and time-pressure traps repeat. What separates a top 1% score
              from a decent one is having a rehearsed way to attack each pattern the moment you
              recognise it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Think of them as formulas — one for every section, drilled until they're automatic.
            </p>

            <div className="mt-10">
              <CtaPair />
            </div>
          </div>

          <ul className="space-y-6 border-l border-ink/10 pl-8">
            {[
              ["Verbal Reasoning", "Know which questions to target, and how to answer even when there is no keyword."],
              ["Decision Making", "Structured attack for each question type — puzzles, syllogisms, probability."],
              ["Quantitative Reasoning", "Mental-math shortcuts and when to skip vs solve."],
              ["Situational Judgement", "The framework that got me a clean Band 1."],
            ].map(([k, v]) => (
              <li key={k}>
                <p className="font-display text-lg text-ink">{k}</p>
                <p className="mt-1 text-sm text-ink/65">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Course */}
      <Section id="course" eyebrow="The main event · Intensive course · August 1 · 9am–4pm" tone="mist">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              On August 1st, I'm revealing it all.
              <br />
              <span className="italic text-blue">One day. Every technique I used.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">
              A concentrated one-day group course — 9am to 4pm on August 1st — walking you through every
              section of the UCAT, every question type, and every formula I built to attack them. Live
              examples, timed drills, and the mindset shifts that make the difference on test day.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              You leave with a repeatable playbook — not a folder of notes you'll never re-open.
              Seats are limited so the group stays small enough for me to work with each of you.
            </p>

            <div className="mt-8 rounded-lg border border-blue/20 bg-blue/5 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue">Included guarantees</p>
              <ul className="mt-3 space-y-2 text-ink/80">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Unlimited WhatsApp support after the course until your exam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Full refund if you don't get any interviews</span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <CtaPair
                payLabel="Reserve your seat — Aug 1"
                enquireLabel="Enquire about the course"
              />
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-background p-8 md:p-10">
            <div className="flex items-baseline justify-between border-b border-ink/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
                  Course date
                </p>
                <p className="mt-2 font-display text-2xl text-ink">August 1</p>
              </div>
              <p className="text-xs uppercase tracking-widest text-ink/50">Limited seats</p>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-blue">
              What's covered
            </p>
            <ul className="mt-4 space-y-4">
              {[
                "Full breakdown of every UCAT section",
                "Section-by-section formulas & attack plans",
                "Timing strategy — when to solve, guess, flag",
                "Live worked examples on hard question types",
                "Situational Judgement framework (Band 1 method)",
                "Test-day mindset & pacing routine",
                "Unlimited WhatsApp support after the course until your exam",
                "Full refund if you don't get any interviews",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>



      {/* Why me */}
      <Section id="about" eyebrow="Why learn from me" tone="ink">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            {/* Photo placeholder — replace src with your own image (e.g. /tutor.jpg or an imported asset) */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-mist/15 bg-mist/5">
              <img
                src="/tutor-placeholder.jpg"
                alt="Zhi Hong Chan"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-mist/50">
                <span className="text-xs uppercase tracking-[0.25em] text-gold">Your photo here</span>
                <span className="max-w-[200px] text-xs text-mist/40">
                  Drop an image at <code className="text-mist/60">public/tutor-placeholder.jpg</code>
                </span>
              </div>
            </div>
            <p className="mt-6 font-display text-2xl text-mist">Zhi Hong Chan</p>
            <p className="mt-1 text-sm text-mist/60">
              Malaysia → London · Imperial College Medicine (incoming)
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl leading-tight text-mist md:text-5xl">
              A recent top 1% scorer —{" "}
              <span className="italic text-mist/80">who just did this from where you are.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-mist/75">
              I'm Zhi Hong — an international student from Malaysia who sat the UCAT in 2025 and
              scored 2560 with Band 1. I know the international applicant journey because I've just
              done it: the timezone gaps, the limited local prep, the pressure of applying to UK
              medicine from abroad. The techniques I teach are built for exactly that context.
            </p>
            <ul className="mt-10 space-y-6 border-l border-mist/15 pl-8">
              {[
                ["Imperial College London", "Incoming first-year medical student"],
                ["UCL & King's College London", "Offers from both medical schools"],
                ["2560 / 2700 · Band 1", "UCAT sat in 2025 — top 1% globally"],
                ["International applicant", "From Malaysia — same journey as my students"],
              ].map(([k, v]) => (
                <li key={k}>
                  <p className="font-display text-xl text-mist">{k}</p>
                  <p className="mt-1 text-sm text-mist/60">{v}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <div className="inline-flex flex-wrap gap-3">
                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center rounded-md bg-mist px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-white"
                >
                  Enrol now
                  <span aria-hidden className="ml-2">→</span>
                </a>
                <a
                  href={ENQUIRE_URL}
                  className="inline-flex items-center justify-center rounded-md border border-mist/40 px-6 py-3 text-sm font-medium tracking-wide text-mist transition-colors hover:bg-mist/10"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* Footer */}
      <footer className="w-full bg-ink text-mist/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg text-mist">
              Decode UCAT
            </p>
            <p className="mt-1 text-sm text-mist/60">
              © {new Date().getFullYear()} · Top 1% UCAT techniques.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center rounded-md bg-mist px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Enrol now
            </a>
            <a
              href={ENQUIRE_URL}
              className="inline-flex items-center justify-center rounded-md border border-mist/30 px-5 py-2.5 text-sm font-medium text-mist transition-colors hover:bg-mist/10"
            >
              Enquire
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
