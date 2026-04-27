const projects = [
  {
    title: "LLM-based HVAC Data Semantic Analysis",
    desc: "A semantic–physical framework for interpreting BEMS and HVAC operation data using LLMs, rule-based scoring, and physical constraints.",
    tags: ["LLM", "HVAC", "BEMS", "Python"],
  },
  {
    title: "YOLO-based Architectural Drawing Recognition",
    desc: "Cross-domain object recognition in architectural drawings using YOLO-based transfer learning and domain adaptation strategies.",
    tags: ["YOLO", "Computer Vision", "Architecture"],
  },
  {
    title: "LSTM-RL Energy Optimization",
    desc: "Energy prediction and operational optimization using LSTM models and reinforcement learning for building energy systems.",
    tags: ["LSTM", "RL", "Energy Optimization"],
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "LLM Applications",
  "HVAC Systems",
  "Building Energy Analysis",
  "BEMS Data Analysis",
  "YOLO / Computer Vision",
  "EnergyPlus",
  "Data Visualization",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Yuanze Feng
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#research" className="hover:text-blue-400">Research</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium text-blue-400">
            PhD Student · AI × Building Energy · HVAC Data Science
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Yuanze Feng
          </h1>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
            I am a PhD student at Kyushu University, focusing on AI-based
            building energy analysis, HVAC data semantic interpretation, and
            intelligent energy optimization. My work bridges machine learning,
            physical system understanding, and real-world building operation data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/KaedeharaT"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
            >
              GitHub
            </a>

            <a
              href="mailto:fengyuanze01@hotmail.com"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-blue-400 hover:text-blue-400"
            >
              Email
            </a>

            <a
              href="/cv.pdf"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-blue-400 hover:text-blue-400"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
          <p className="mb-4 text-sm text-slate-400">Profile</p>
          <h2 className="mb-4 text-2xl font-bold">
            AI for Carbon-neutral Building Systems
          </h2>
          <p className="leading-7 text-slate-300">
            Research interests include LLM-based HVAC data understanding,
            building energy efficiency, architectural drawing recognition,
            and data-driven decision support for energy-saving renovation.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">About</h2>
        <p className="max-w-4xl leading-8 text-slate-300">
          I am currently pursuing a doctoral degree in the Graduate School of
          Human-Environment Studies at Kyushu University. My research aims to
          improve building energy performance by combining AI, building system
          knowledge, and operational data analysis. I am interested in applying
          these methods to practical energy management, carbon neutrality, and
          digital transformation in the construction and building service fields.
        </p>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Research Focus</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">HVAC Data Semantics</h3>
            <p className="text-slate-400">
              Interpreting BEMS column meanings through LLM-based inference,
              rule-based scoring, and physical consistency validation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Architectural AI</h3>
            <p className="text-slate-400">
              Recognizing symbols and objects in architectural drawings under
              cross-domain drafting style differences.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Energy Optimization</h3>
            <p className="text-slate-400">
              Predicting and optimizing building energy operation through
              LSTM, reinforcement learning, and physical constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Selected Projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/60"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-5 text-sm leading-7 text-slate-400">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Publications / Presentations</h2>

        <div className="space-y-5 text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="font-semibold">
              Exploring the Application of Large Language Models in Intelligent
              Air Conditioning Fault Diagnosis and Energy Efficiency Analysis
            </p>
            <p className="mt-2 text-sm text-slate-400">
              ASHRAE Winter Conference 2026 · Las Vegas
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="font-semibold">
              Cross-domain Object Recognition in Architectural Drawings Using YOLO
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Manuscript / journal submission in progress
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>
          <p className="mb-6 max-w-3xl text-slate-300">
            I am open to research collaboration, AI/data-related opportunities,
            and roles related to building energy, HVAC systems, and digital
            transformation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:fengyuanze01@hotmail.com"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
            >
              Contact by Email
            </a>

            <a
              href="https://github.com/KaedeharaT"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:border-blue-400 hover:text-blue-400"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Yuanze Feng. Built with Next.js and Vercel.
      </footer>
    </main>
  );
}
