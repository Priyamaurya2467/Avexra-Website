export default function WorkflowCanvas() {
  return (
    <div className="lg:col-span-7 relative w-full h-[600px] lg:h-[800px] perspective-1000 reveal delay-200">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-[80px] rounded-full transform scale-90 z-0"></div>

      <div className="relative z-10 w-full h-full bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-indigo-200/50 overflow-hidden flex flex-col group transform transition-transform duration-700 hover:rotate-y-1 hover:rotate-x-1">
        {/* WINDOW BAR */}
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
              avexra.ai/dashboard
            </span>
          </div>
          <div className="flex gap-4">
            <div className="h-1.5 w-20 bg-slate-200 rounded-full"></div>
          </div>        </div>

        {/* CANVAS */}
        <div className="relative flex-1 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
          {/* SVG CONNECTIONS */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            overflow="visible"
          >
            <defs
            >
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
              d="M155 309 C 160 330, 200 400, 250 400"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_3s_linear_infinite]"
              d="M155 309 C 160 330, 200 400, 250 400"
              fill="none"
              filter="url(#glow-line)"
              stroke="url(#flow-gradient)"
              strokeDasharray="10 10"
              strokeWidth="2"
            ></path>
            <path
              d="M390 534 C 452 450, 450 452, 493 350"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_4s_linear_infinite]"
              d="M390 534 C 452 450, 450 452, 493 350"
              fill="none"
              filter="url(#glow-line)"
              stroke="url(#flow-gradient)"
              strokeDasharray="12 12"
              strokeWidth="2"
            ></path>
            <path
              d="M390 534 C 410 548, 410 548, 430 550"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            <path
              className="animate-[flow_2s_linear_infinite]"
              d="M390 534 C 410 548, 410 548, 430 550"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeDasharray="8 8"
              strokeWidth="2"
            ></path>
            <path
              d="M680 240 C 720 240, 720 550, 680 550"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            ></path>
            {/* <circle
              className="animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
              cx="680"
              cy="240"
              fill="#4f46e5"
              opacity="0.5"
              r="4"
            ></circle> */}
          </svg>

          {/* 1️⃣ SELECT DATA SOURCE */}
          <div className="absolute top-[80px] left-[80px] node-card rounded-xl w-[150px] p-0 z-10 animate-float-delayed bg-white shadow-lg">
            <div className="p-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">
                Select Data Source
              </span>
            </div>

            <div className="p-3 grid grid-cols-2 gap-2">
              <div className="aspect-square bg-blue-50/50 border border-blue-150 rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-blue-500 group-hover:scale-110 transition-transform"                    style={{
                      fontVariationSettings: "'wght' 400",
                    }}>
                  cloud
                </span>
              </div>

              <div className="aspect-square bg-white border-2 border-primary/40 rounded-lg flex items-center justify-center shadow-inner relative">
                <span className="material-symbols-outlined text-slate-700"                    style={{
                      fontVariationSettings: "'wght' 400",
                    }}>
                  database
                </span>
                <div className="absolute -top-1 -right-1 size-3 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  {/* <span className="material-symbols-outlined text-[3px] text-black">
                    check
                  </span> */}
                </div>
              </div>

              <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400"
                style={{
                      fontVariationSettings: "'wght' 400",
                    }}>
                  api
                </span>
              </div>

              <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-slate-400"
                style={{
                      fontVariationSettings: "'wght' 400",
                    }}>
                  folder
                </span>
              </div>
            </div>

            <div className="p-2 border-t border-slate-100">
              <div className="bg-primary/10 rounded px-2 py-1 flex items-center gap-2">
                <span className="text-[9px] font-mono text-slate-600 truncate">
                  Customer_Sales_Data_Q2
                </span>
              </div>
            </div>
                            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 size-3 bg-white border-2 border-primary rounded-full z-30"></div>
          </div>

          {/* 2️⃣ AVEXRA ASSISTANT CHAT */}
          <div className="absolute bottom-[50px] left-[50px] node-card rounded-xl w-[340px] p-0 z-20 animate-float bg-white shadow-float-card">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white/50 rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold text-slate-800">
                  Avexra Assistant
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                  APP
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                Just now
              </span>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-3">
                <div className="size-7 rounded-full bg-slate-900 shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                  U
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900">
                      User
                    </span>
                    <span className="text-[10px] text-slate-400">9:41 AM</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Hey Avexra, can you show me last quarter&apos;s sales by region?
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-7 rounded-full bg-primary/20 shrink-0 flex items-center justify-center text-black font-bold">
                  <span className="material-symbols-outlined"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "14px",
                    }}
                    >
                    smart_toy
                  </span>
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900">
                      Avexra AI
                    </span>
                    <span className="text-[10px] text-slate-400">9:41 AM</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600 mb-2">
                    Here&apos;s the breakdown of Q2 sales by region:
                  </p>
                  <ul className="text-[11px] text-slate-500 space-y-1 pl-1 mb-2 border-l-2 border-slate-100">
                    <li>
                      • North America:{" "}
                      <span className="font-medium text-slate-800">$3.2M</span>
                    </li>
                    <li>
                      • Europe:{" "}
                      <span className="font-medium text-slate-800">$2.1M</span>
                    </li>
                    <li>
                      • Asia-Pacific:{" "}
                      <span className="font-medium text-slate-800">$1.7M</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400" style={{fontVariationSettings: "'wght' 400",fontSize: "16px",}}>
                add_circle
              </span>
              <div className="h-1.5 w-1/3 bg-slate-200 rounded-full"></div>
              <span className="material-symbols-outlined text-slate-400 ml-auto"
                    style={{
                      fontVariationSettings: "'wght' 400",
                      fontSize: "16px",
                    }}                >
                send
              </span>
            </div>
            <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 size-3 bg-white border-2 border-primary rounded-full z-30"></div>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 size-3 bg-white border-2 border-primary rounded-full z-30"></div>
          </div>

          {/* 3️⃣ REVENUE ANALYTICS */}
          <div className="absolute top-[50px] right-[50px] node-card rounded-xl w-[400px] p-0 z-15 animate-float bg-white shadow-2xl border-t-4 border-t-primary">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <span className="material-symbols-outlined text-base"
                    style={{
                      fontVariationSettings: "'wght' 300",
                    }}>
                    analytics
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Revenue Analytics
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Real-time Generation
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <span className="size-2 rounded-full bg-slate-200"></span>
                <span className="size-2 rounded-full bg-slate-200"></span>
              </div>
            </div>
            <div className="p-5 relative h-[220px]">
              <div className="absolute inset-x-5 inset-y-5 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-px bg-slate-50"></div>
                <div className="w-full h-px bg-slate-50"></div>
                <div className="w-full h-px bg-slate-50"></div>
                <div className="w-full h-px bg-slate-50"></div>
                <div className="w-full h-px bg-slate-50"></div>
              </div>
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 50"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#f9f506"
                      stopOpacity="0.3"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#f9f506"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 L0,35 L10,30 L20,38 L30,25 L40,28 L50,15 L60,20 L70,10 L80,18 L90,5 L100,12 L100,50 Z"
                  fill="url(#chartGradient)"
                ></path>
                <path
                  d="M0,35 L10,30 L20,38 L30,25 L40,28 L50,15 L60,20 L70,10 L80,18 L90,5 L100,12"
                  fill="none"
                  stroke="#e0dc05"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.8"
                ></path>
                <circle
                  cx="70"
                  cy="10"
                  fill="white"
                  r="1.5"
                  stroke="#e0dc05"
                  strokeWidth="0.5"
                ></circle>
                <line
                  stroke="#e0dc05"
                  strokeDasharray="1 1"
                  strokeWidth="0.2"
                  x1="70"
                  x2="70"
                  y1="10"
                  y2="50"
                ></line>
              </svg>
              <div className="absolute top-[20px] right-[25%] bg-white p-2 rounded shadow-lg border border-slate-100 z-10 animate-float-delayed">
                <span className="block text-[9px] text-slate-400 uppercase">
                  Q2 Peak
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  $124,500
                </span>
              </div>
            </div>
            <div className="px-5 pb-4 flex justify-between text-[10px] text-slate-400 font-mono uppercase">
              <span>Apr 01</span>
              <span>May 15</span>
              <span>Jun 30</span>
            </div>
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 size-3 bg-white border-2 border-primary rounded-full z-30"></div>
          </div>

          {/* 4️⃣ AI INSIGHT GENERATED */}
          <div className="absolute bottom-[130px] right-[50px] z-20 animate-float-delayed">
            <div className="bg-white/90 backdrop-blur border border-primary/30 rounded-lg p-3 shadow-xl max-w-[260px]">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 bg-primary/20 rounded-md text-black shadow-sm">
                  <span className="material-symbols-outlined text-base"
                                      style={{
                      fontVariationSettings: "'wght' 350",
                    }}
                >
                    auto_awesome
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 mb-1">
                    AI Insight Generated
                  </h4>
                  <p className="text-[10px] text-slate-600 leading-snug">
                    Q3 projection indicates a{" "}
                    <span className="font-bold text-green-600">
                      +18% growth
                    </span>{" "}
                    based on current pipeline velocity.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button className="px-2 py-1 bg-slate-100 rounded text-[9px] font-medium text-slate-600 hover:bg-slate-200">
                      View Details
                    </button>
                    <button className="px-2 py-1 bg-primary/20 text-black rounded text-[9px] font-bold hover:bg-primary-dim">
                      Apply Forecast
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>

          {/* STATUS */}
          <div className="absolute bottom-6 right-6 bg-white/90 border border-slate-200 rounded-lg px-4 py-2.5 flex items-center gap-3 shadow-lg shadow-indigo-100/50 backdrop-blur-md z-30">
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
