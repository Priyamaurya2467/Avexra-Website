export default function WorkflowCanvas() {
  return (
    <div className="lg:col-span-7 relative w-full h-[600px] lg:h-[800px] perspective-1000 reveal delay-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-[80px] rounded-full transform scale-90 z-0"></div>
      <div className="relative z-10 w-full h-full bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-indigo-200/50 overflow-hidden flex flex-col group transform transition-transform duration-700 hover:rotate-y-1 hover:rotate-x-1">
        <div className="h-14 border-b border-slate-200 bg-white/80 flex items-center px-6 justify-between shrink-0">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-400 border border-red-500/30 hover:bg-red-500 transition-colors shadow-sm"></div>
            <div className="size-3 rounded-full bg-yellow-400 border border-yellow-500/30 hover:bg-yellow-500 transition-colors shadow-sm"></div>
            <div className="size-3 rounded-full bg-green-400 border border-green-500/30 hover:bg-green-500 transition-colors shadow-sm"></div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 shadow-inner">
            <span
              className="material-symbols-outlined text-slate-400"
              style={{ fontVariationSettings: "'wght' 400", fontSize: "12px" }}
            >
              lock
            </span>
            <span className="text-xs font-mono text-slate-500">
              avexra.ai/workflow/agent-v1
            </span>
          </div>
          <div className="flex gap-4">
            <div className="h-1.5 w-20 bg-slate-200 rounded-full"></div>
          </div>
        </div>
        <div className="relative flex-1 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden cursor-grab active:cursor-grabbing">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            overflow="visible"
          >
            <defs>
              <linearGradient
                id="flow-gradient"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2"></stop>
                <stop offset="50%" stopColor="#4f46e5" stopOpacity="1"></stop>
                <stop
                  offset="100%"
                  stopColor="#818cf8"
                  stopOpacity="0.2"
                ></stop>
              </linearGradient>
              <filter id="glow-line">
                <feGaussianBlur
                  result="coloredBlur"
                  stdDeviation="2"
                ></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M220 180 C 220 280, 220 280, 220 350"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_3s_linear_infinite]"
              d="M220 180 C 220 280, 220 280, 220 350"
              fill="none"
              filter="url(#glow-line)"
              stroke="url(#flow-gradient)"
              strokeDasharray="10 10"
              strokeWidth="2"
            ></path>
            <path
              d="M300 400 C 400 400, 400 240, 480 240"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_2s_linear_infinite]"
              d="M300 400 C 400 400, 400 240, 480 240"
              fill="none"
              filter="url(#glow-line)"
              stroke="url(#flow-gradient)"
              strokeDasharray="8 8"
              strokeWidth="2"
            ></path>
            <path
              d="M300 400 C 400 400, 400 550, 480 550"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_4s_linear_infinite]"
              d="M300 400 C 400 400, 400 550, 480 550"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeDasharray="12 12"
              strokeWidth="2"
            ></path>
            <path
              d="M680 240 C 720 240, 720 550, 680 550"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <circle
              className="animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
              cx="720"
              cy="395"
              fill="#4f46e5"
              opacity="0.5"
              r="4"
            ></circle>
          </svg>
          <div className="absolute top-[100px] left-[120px] node-card rounded-xl w-52 p-0 z-10 animate-float bg-white">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-yellow-100">
                  <span
                    className="material-symbols-outlined text-yellow-600"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "14px",
                    }}
                  >
                    bolt
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Webhook Trigger
                </span>
              </div>
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                <span>Status:</span>
                <span className="text-green-600 font-bold">Listening...</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 bg-slate-100 p-2 rounded border border-slate-200 truncate shadow-inner">
                POST /v1/leads/capture
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-3 bg-white border-2 border-primary rounded-full hover:bg-primary transition-colors cursor-pointer shadow-sm"></div>
          </div>
          <div className="absolute top-[350px] left-[120px] node-card rounded-xl w-52 p-0 z-10 animate-float-delayed bg-white">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 bg-white border-2 border-slate-300 rounded-full"></div>
            <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50 rounded-t-xl">
              <div className="p-1 rounded bg-blue-100">
                <span
                  className="material-symbols-outlined text-blue-600"
                  style={{
                    fontVariationSettings: "'wght' 400",
                    fontSize: "14px",
                  }}
                >
                  alt_route
                </span>
              </div>
              <span className="text-xs font-bold text-slate-700">
                Lead Router
              </span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center bg-indigo-50 p-2 rounded border border-indigo-100">
                <span className="text-[10px] text-indigo-700 font-medium">
                  Score &gt; 80
                </span>
                <span
                  className="material-symbols-outlined text-indigo-600"
                  style={{ fontSize: "13px" }}
                >
                  arrow_forward
                </span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100 opacity-60">
                <span className="text-[10px] text-slate-500">
                  Score &lt; 80
                </span>
                <span
                  className="material-symbols-outlined text-slate-400"
                  style={{ fontSize: "13px" }}
                >
                  close
                </span>
              </div>
            </div>
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 size-3 bg-white border-2 border-primary rounded-full hover:bg-primary transition-colors cursor-pointer shadow-sm"></div>
          </div>
          <div className="absolute top-[160px] right-[40px] lg:right-[60px] node-card rounded-xl w-72 p-0 z-20 border-primary/30 shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)] ring-1 ring-primary/10 animate-float bg-white">
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 size-3 bg-primary border-2 border-white rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] z-30"></div>
            <div className="px-4 py-3 border-b border-indigo-100 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-indigo-100 text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "14px",
                    }}
                  >
                    auto_awesome
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-800">
                  GPT-4 Analyst
                </span>
              </div>
              <span className="text-[9px] font-bold bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
                Agentic
              </span>
            </div>
            <div className="p-5 space-y-4 bg-white/95">
              <div className="space-y-1.5">
                <span className="text-[10px] text-primary uppercase tracking-wider font-bold opacity-80">
                  Instruction
                </span>
                <p className="text-xs text-slate-600 leading-snug font-medium">
                  Analyze prospect intent from unstructured data and generate
                  personalized outreach strategy.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>Processing...</span>
                  <span>78%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-4/5 bg-gradient-to-r from-primary to-indigo-400 animate-[shine_1.5s_infinite] rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "10px",
                    }}
                  >
                    token
                  </span>
                  420 tokens
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "10px",
                    }}
                  >
                    timer
                  </span>
                  0.8s
                </span>
              </div>
            </div>
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 size-3 bg-primary border-2 border-white rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:scale-125 transition-transform cursor-pointer"></div>
          </div>
          <div className="absolute bottom-[140px] right-[60px] lg:right-[100px] node-card rounded-xl w-52 p-0 z-10 animate-float-delayed bg-white">
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 size-3 bg-white border-2 border-slate-300 rounded-full"></div>
            <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50 rounded-t-xl">
              <div className="p-1 rounded bg-purple-100">
                <span
                  className="material-symbols-outlined text-purple-600"
                  style={{
                    fontVariationSettings: "'wght' 400",
                    fontSize: "14px",
                  }}
                >
                  database
                </span>
              </div>
              <span className="text-xs font-bold text-slate-700">
                Postgres Insert
              </span>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-2 bg-slate-200 rounded w-8 animate-pulse"></div>
                  <div className="h-2 bg-slate-100 rounded w-full animate-pulse delay-75"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 bg-slate-200 rounded w-8 animate-pulse delay-100"></div>
                  <div className="h-2 bg-slate-100 rounded w-2/3 animate-pulse delay-150"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 bg-slate-200 rounded w-8 animate-pulse delay-200"></div>
                  <div className="h-2 bg-slate-100 rounded w-3/4 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/90 border border-slate-200 rounded-lg px-4 py-2.5 flex items-center gap-3 shadow-lg shadow-indigo-100/50 backdrop-blur-md z-30">
            <div className="flex size-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                System Status
              </span>
              <span className="text-xs font-bold text-slate-700">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
