import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — Transcripts in Three Minutes" },
      {
        name: "description",
        content:
          "Upload your video and get a clean, accurate transcript in three minutes. Built for creators, educators, and engineers.",
      },
      { property: "og:title", content: "Video Speed Reader — Transcripts in Three Minutes" },
      {
        property: "og:description",
        content: "Upload your video, get a clean transcript in three minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  {
    title: "高準確度逐字稿",
    en: "High-accuracy transcripts",
    body: "Powered by OpenAI Whisper. Supports Chinese and English out of the box.",
  },
  {
    title: "三分鐘交付",
    en: "Three-minute turnaround",
    body: "Processed in the background — you get an email the moment it's ready.",
  },
  {
    title: "可商用授權",
    en: "Commercial-use ready",
    body: "You own the output. Use it however you like, with no extra licensing.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-base font-semibold tracking-tight">Video Speed Reader</span>
          <Link
            to="/auth"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-36">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          />
          <div className="relative mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-block rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              Whisper-powered transcription
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Video Speed Reader
            </h1>
            <p className="mt-6 text-xl font-medium sm:text-2xl">
              上傳影片，三分鐘內拿到逐字稿。
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Upload your video, get a clean transcript in three minutes.
            </p>
            <div className="mt-10">
              <Link
                to="/auth"
                className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-primary"
              >
                Sign in / 登入
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn key={f.en} delay={i * 120}>
                <article className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-semibold text-primary">
                    {i + 1}
                  </div>
                  <h2 className="text-lg font-semibold">{f.title}</h2>
                  <p className="mt-1 text-sm text-primary">{f.en}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <p className="mx-auto max-w-6xl text-sm text-muted-foreground">
          © 2026 Video Speed Reader
        </p>
      </footer>
    </div>
  );
}
