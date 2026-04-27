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
          <a href="#" className="text-lg font-bold">Yuanze Feng</a>

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
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 text-sm text-blue-400">
            PhD Student · AI × Building Energy · HVAC Data Science
          </p>

          <h1 className="mb-6 text-5xl font-bold">Yuanze Feng</h1>

          <p className="mb-8 text-lg text-slate-300">
            I specialize in AI-driven building energy systems, focusing on transforming
            complex HVAC and operational data into actionable insights.
            My work bridges machine learning and physical systems to support
            energy optimization and carbon neutrality.
          </p>

        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-slate-300">
          PhD student at Kyushu University focusing on AI-based building energy systems,
          HVAC data analysis, and intelligent optimization.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-900 p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="bg-slate-900 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>

          <p className="mb-6 text-slate-300">
            Open to research collaboration and AI-related opportunities.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="select-all font-medium">
                fengyuanze01@hotmail.com
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-400">GitHub</p>
              <a
                href="https://github.com/KaedeharaT"
                className="text-blue-400"
              >
                https://github.com/KaedeharaT
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-slate-500 py-6">
        © 2026 Yuanze Feng
      </footer>

    </main>
  );
}
