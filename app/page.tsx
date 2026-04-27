export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <p className="text-blue-400 mb-4">
          PhD Student · AI × Building Energy
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Yuanze Feng
        </h1>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl mb-8">
          I am a PhD student at Kyushu University, focusing on AI-based
          building energy analysis, HVAC data semantic interpretation,
          and intelligent energy optimization. My research combines
          machine learning, physical modeling, and real-world building data
          to improve energy efficiency and support carbon-neutral strategies.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/KaedeharaT"
            className="bg-blue-500 px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="mailto:your@email.com"
            className="border border-gray-500 px-6 py-3 rounded-xl"
          >
            Email
          </a>
        </div>
      </section>

      {/* Research */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Research</h2>

        <p className="text-gray-400 leading-8">
          My research focuses on intelligent building energy systems,
          including LLM-based semantic analysis of HVAC data, cross-domain
          object recognition in architectural drawings, and reinforcement
          learning-based energy optimization. The goal is to bridge
          data-driven AI methods with physical system understanding.
        </p>
      </section>

      {/* Projects */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "LLM-based HVAC Data Semantic Analysis",
              desc: "A framework combining LLMs and physical constraints to interpret BEMS data.",
            },
            {
              title: "YOLO-based Architectural Drawing Recognition",
              desc: "Cross-domain object detection for architectural symbols using YOLO.",
            },
            {
              title: "LSTM-RL Energy Optimization",
              desc: "Energy prediction and control using deep learning and reinforcement learning.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <p className="text-gray-400">
          Python · Machine Learning · Deep Learning · HVAC Systems ·
          Building Energy Simulation · Data Analysis · LLM Applications
        </p>
      </section>

      {/* Contact */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <p className="text-gray-400 mb-4">
          Email: your@email.com
        </p>

        <a
          href="https://github.com/KaedeharaT"
          className="text-blue-400"
        >
          https://github.com/KaedeharaT
        </a>
      </section>
    </main>
  );
}
