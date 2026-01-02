import Link from "next/link";
import Image from "next/image";

import Background from "../layout/Background";
// import WorkflowCanvas from "./WorkflowCanvas";

export default function Hero() {
  return (
    <main className="relative z-10 flex flex-col items-center">
      <section className="relative w-full pt-40 pb-20 lg:pt-40  max-w-[1400px] mx-auto min-h-screen flex items-center">
        <Background />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left z-20 px-4 sm:px-6 lg:pl-8">
            {/* <div className="flex justify-center lg:justify-start reveal">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-indigo-100 hover:border-indigo-300 transition-all cursor-default group shadow-sm shadow-indigo-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>

                <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                  v2.4 Live: Agentic Workflows
                </span>

                <span
                  className="material-symbols-outlined text-primary/50 group-hover:text-primary transition-transform group-hover:translate-x-1"
                  style={{
                    fontVariationSettings: "'wght' 400",
                    fontSize: "14px",
                  }}
                >
                  arrow_forward
                </span>
              </div>
            </div> */}

            <div className="space-y-6 reveal delay-100">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                We Build <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dim via-primary to-indigo-400">
                  Intelligent Systems
                </span>
                <br />
                That{" "}
                <span className="relative inline-block text-primary">
                  Work
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                    />
                  </svg>
                </span>{" "}
                For You
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal border-l-2 border-primary/30 pl-6">
                Enterprise-grade AI consultancy. We design agentic automation,
                predictive analytics, and scalable neural systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center reveal delay-200">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-bold text-lg overflow-hidden transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shine skew-x-12" />
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  Talk to Experts
                  <span
                    className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "sm",
                    }}
                  >
                    arrow_forward
                  </span>
                </span>
              </Link>

              <button className="group flex items-center justify-center h-14 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md whitespace-nowrap">
                <span
                  className="material-symbols-outlined mr-2 text-slate-400 group-hover:text-primary transition-colors"
                  style={{
                    fontVariationSettings: "'wght' 400",
                    fontSize: "sm",
                  }}
                >
                  play_circle
                </span>
                View Case Studies
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col gap-4 reveal delay-300">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Orchestrating best-in-class models
              </span>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                <div
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 text-slate-800"
                  title="OpenAI Integration"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "sm",
                    }}
                  >
                    psychology
                  </span>
                  <span className="font-semibold text-sm">GPT-4o</span>
                </div>

                <div
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 text-slate-800"
                  title="Python Backend"
                >
                  <span
                    className="material-symbols-outlined "
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "sm",
                    }}
                  >
                    terminal
                  </span>
                  <span className="font-semibold text-sm">Python</span>
                </div>

                <div
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 text-slate-800"
                  title="n8n Workflow"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "sm",
                    }}
                  >
                    webhook
                  </span>
                  <span className="font-semibold text-sm">n8n</span>
                </div>

                <div
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 text-slate-800"
                  title="Vector Database"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "sm",
                    }}
                  >
                    database
                  </span>
                  <span className="font-semibold text-sm">Vector DB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Canvas */}
          {/* <div className="lg:col-span-7">
            <WorkflowCanvas />
          </div> */}

          <div className="lg:col-span-7 relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
            {/* Glow background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-100/30 to-amber-100/20 blur-[100px] rounded-full z-0 pointer-events-none overflow-hidden" />

            {/* IMAGE WRAPPER */}
            <div className="relative z-10 w-full h-full max-w-none rounded-l-3xl overflow-hidden shadow-2xl group border-l border-t border-b border-white/60">
              {/* IMAGE (BACKGROUND LAYER) */}
              <Image
                src="/illustrations/HeroImage.png"
                alt="Agentic AI workflow visualization"
                fill
                priority
                className="object-cover z-0 opacity-90 transition-transform duration-[20s] ease-linear group-hover:scale-110"
              />

              {/* OVERLAYS */}
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-white/10 via-white/20 to-white/60 mix-blend-overlay" />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-light via-transparent to-transparent opacity-80 lg:opacity-30" />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
