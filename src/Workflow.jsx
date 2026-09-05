import React, { useState } from "react";
import "./workflow.css";

const colors = {
  purple: {
    c: "#8b7cf6",
    bg: "rgba(139,124,246,0.15)",
  },
  teal: {
    c: "#2dd4a7",
    bg: "rgba(45,212,167,0.15)",
  },
  coral: {
    c: "#ff8a5c",
    bg: "rgba(255,138,92,0.15)",
  },
  pink: {
    c: "#f472a0",
    bg: "rgba(244,114,160,0.15)",
  },
  amber: {
    c: "#facc5c",
    bg: "rgba(250,204,92,0.15)",
  },
};

const userFlow = [
  ["Start", "User opens VernacAI website"],
  ["Select language", "English, Hindi, Punjabi"],
  ["Choose mode", "AI tutor, translator, notes helper"],
  ["Ask question", "User types or speaks a question"],
  ["Get AI response", "AI generates answer in selected language"],
  ["Listen / read", "User can listen or read on screen"],
];

const architecture = [
  ["Frontend", "React + Vite UI, voice and text input"],
  ["API layer", "Receives, validates and routes requests"],
  ["AI model", "Gemini API understands and answers"],
  ["Response processing", "Formats, translates and prepares speech"],
  ["Frontend display", "Shows answer and awaits next question"],
];

const features = [
  ["Multilingual support", "English, Hindi, Punjabi", "purple"],
  ["AI-powered tutor", "Concept explanations and step-by-step answers", "pink"],
  ["Voice input", "User can ask by speaking", "amber"],
  ["Voice output", "Answers read aloud in selected language", "coral"],
  ["Clean, simple UI", "Easy to use for students of all ages", "pink"],
  ["Secure and scalable", "API-based architecture, ready to scale", "teal"],
];

const stack = [
  ["Frontend", "React.js (JSX)"],
  ["Build tool", "Vite"],
  ["Styling", "CSS3"],
  ["AI model", "Google Gemini API"],
  ["Backend", "Node.js + Express.js", "Planned"],
  ["Voice", "Web Speech API", "Planned"],
];

const summary = [
  {
    title: "User opens VernacAI",
    items: ["Loads the website", "Landing screen ready"],
  },
  {
    title: "Selects language and mode",
    items: [
      "Pick English, Hindi or Punjabi",
      "Pick tutor, translator or notes helper",
    ],
  },
  {
    title: "Asks question",
    items: ["Typed input or speech", "Question sent to backend"],
  },
  {
    title: "AI processes and generates answer",
    items: [
      "Gemini API understands the question",
      "Generates a simplified response",
    ],
  },
  {
    title: "Answer displayed",
    items: ["Text shown on screen", "Text-to-speech can read the answer"],
  },
  {
    title: "User continues learning",
    items: ["Can ask another question", "Session continues seamlessly"],
  },
];

const dataflow = [
  "User",
  "VernacAI System",
  "AI Model (Gemini)",
  "Answer Generated",
  "Backend Response",
];

const benefits = [
  "Makes quality education accessible in regional languages",
  "Helps students understand difficult topics easily",
  "Encourages self-learning anytime, anywhere",
  "Supports India's vision of digital and inclusive education",
];

function FlowRow({ nodes, color = "purple" }) {
  const col = colors[color];

  return (
    <div className="wf-flow-row">
      {nodes.map(([title, desc], index) => (
        <React.Fragment key={title}>
          <div
            className="wf-flow-node"
            style={{
              "--accent": col.c,
              "--accent-bg": col.bg,
            }}
          >
            <div className="wf-icon">{index + 1}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>

          {index < nodes.length - 1 && (
            <div className="wf-flow-arrow">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function Workflow() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="workflow-page">
      <header className="wf-header">
        <h1>VernacAI – AI Tutor</h1>
        <h2>Project Workflow</h2>
        <p>AI-powered multilingual tutor for smarter learning</p>
      </header>

      <div className="wf-container">

        {/* USER FLOW */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">1</span>
            <span>User Flow</span>
            <span className="wf-line" />
          </div>

          <FlowRow nodes={userFlow} color="purple" />
        </section>

        {/* ARCHITECTURE */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">2</span>
            <span>System Architecture</span>
            <span className="wf-line" />
          </div>

          <FlowRow nodes={architecture} color="teal" />
        </section>

        {/* FEATURES */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">3</span>
            <span>Key Features</span>
            <span className="wf-line" />
          </div>

          <div className="wf-grid">
            {features.map(([title, desc, color], index) => {
              const col = colors[color];

              return (
                <div
                  className="wf-card"
                  key={title}
                  style={{
                    "--accent": col.c,
                    "--accent-bg": col.bg,
                  }}
                >
                  <div className="wf-card-icon">{index + 1}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">4</span>
            <span>Tech Stack</span>
            <span className="wf-line" />
          </div>

          <div className="wf-stack">
            {stack.map(([label, value, badge]) => (
              <div className="wf-stack-row" key={label}>
                <div className="wf-stack-label">{label}</div>

                <div className="wf-stack-value">
                  {value}

                  {badge && (
                    <span className="wf-badge">
                      {badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUMMARY */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">5</span>
            <span>Complete Flow Summary</span>
            <span className="wf-line" />
          </div>

          {summary.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="wf-accordion" key={item.title}>
                <button
                  className="wf-accordion-head"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <h4>
                    {index + 1}. {item.title}
                  </h4>

                  <span
                    className={
                      isOpen
                        ? "wf-chevron open"
                        : "wf-chevron"
                    }
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="wf-accordion-body">
                    <ul>
                      {item.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* DATA FLOW */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">6</span>
            <span>Data Flow Diagram</span>
            <span className="wf-line" />
          </div>

          <div className="wf-dataflow">
            {dataflow.map((item, index) => (
              <React.Fragment key={item}>
                <div className="wf-data-node">
                  {item}
                </div>

                {index < dataflow.length - 1 && (
                  <div className="wf-data-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="wf-section">
          <div className="wf-section-title">
            <span className="wf-num">7</span>
            <span>Benefits</span>
            <span className="wf-line" />
          </div>

          <div className="wf-benefits">
            {benefits.map((benefit) => (
              <div className="wf-benefit" key={benefit}>
                <div className="wf-check">✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="wf-footer">
          VernacAI — supporting India's vision of digital and inclusive education
        </footer>

      </div>
    </div>
  );
}

export default Workflow;