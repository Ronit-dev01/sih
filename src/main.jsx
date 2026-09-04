import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const languages = ["English", "हिन्दी", "ਪੰਜਾਬੀ" , "मराठी" , "বাংলা", "தமிழ்", "తెలుగు"];

const answers = {
  English: {
    title: "Binary Search — Simple Explanation",
    text:
      "Binary search finds an item in a sorted list by repeatedly checking the middle element and removing half of the remaining search space.",
    bullets: [
      "The array must be sorted.",
      "Check the middle element.",
      "Discard the half that cannot contain the answer.",
      "Repeat until the item is found."
    ]
  },

  "हिन्दी": {
    title: "बाइनरी सर्च — आसान भाषा में",
    text:
      "बाइनरी सर्च sorted list में किसी item को खोजने का तरीका है। हर बार बीच वाले element को देखकर search area का आधा हिस्सा हटा दिया जाता है।",
    bullets: [
      "Array का sorted होना जरूरी है।",
      "बीच वाला element देखें।",
      "जिस आधे हिस्से में answer नहीं हो सकता उसे हटा दें।",
      "Item मिलने तक दोहराएँ।"
    ]
  },

  "ਪੰਜਾਬੀ": {
    title: "ਬਾਈਨਰੀ ਸਰਚ — ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ",
    text:
      "Binary Search sorted list ਵਿੱਚ ਕਿਸੇ item ਨੂੰ ਲੱਭਣ ਦਾ ਤਰੀਕਾ ਹੈ। ਹਰ ਵਾਰ ਵਿਚਕਾਰਲੇ element ਨੂੰ check ਕਰਕੇ search area ਦਾ ਅੱਧਾ ਹਿੱਸਾ ਹਟਾਇਆ ਜਾਂਦਾ ਹੈ।",
    bullets: [
      "Array sorted ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "ਵਿਚਕਾਰਲਾ element check ਕਰੋ।",
      "ਗਲਤ half ਨੂੰ ਹਟਾਓ।",
      "Item ਮਿਲਣ ਤੱਕ repeat ਕਰੋ।"
    ]
  },

  "मराठी": {
    title: "बाइनरी सर्च — सोप्पा भाषेत",
    text:
      "बाइनरी सर्च वापरून एका क्रमवंत सूचीमध्ये एका घटकाची शोध घेतो. प्रत्येकवेळी मध्यवर्ती घटकावर तपासणी करून शोधण्याचे क्षेत्राचा अर्धा हिस्सा काढून टाकतो.",
    bullets: [
      "सूची क्रमवंत असली पाहिजे.",
      "मध्यवर्ती घटकावर तपासा.",
      "उत्तर समजून नसलेला अर्धा हिस्सा काढून टाका.",
      "घटक मिळविणे पर्यंत पुनः प्रयत्न करा."
    ]
  },
  "বাংলা": {
    title: "বাইনারি সার্চ — সহজ ভাষায়",
    text:
      "বাইনারি সার্চ একটি sorted list-এ একটি item খুঁজে বের করার পদ্ধতি। প্রতিবার মধ্যবর্তী element পরীক্ষা করে search area-এর অর্ধেক অংশ বাদ দেওয়া হয়।",
    bullets: [
      "Array-টি sorted হতে হবে।",
      "মধ্যবর্তী element পরীক্ষা করুন।",
      "যে অর্ধেক অংশে উত্তর থাকতে পারে না তা বাদ দিন।",
      "Item পাওয়া না পর্যন্ত পুনরাবৃত্তি করুন।"
    ]
  },
  "தமிழ்": {
    title: "பைனரி தேடல் — எளிய விளக்கம்",
    text:
      "பைனரி தேடல் என்பது ஒரு வரிசைப்படுத்தப்பட்ட பட்டியலில் ஒரு உருப்படியை கண்டுபிடிக்கும் முறை. ஒவ்வொரு முறையும் நடுவில் உள்ள உருப்படியை சரிபார்த்து மீதமுள்ள தேடல் பகுதியின் பாதியை நீக்குகிறது.",
    bullets: [
      "அணியியல் வரிசைப்படுத்தப்பட்டிருக்க வேண்டும்.",
      "நடுவில் உள்ள உருப்படியை சரிபார்க்கவும்.",
      "பதில் இருக்க முடியாத பாதியை நீக்கவும்.",
      "உருப்படி கிடைக்கும் வரை மீண்டும் முயற்சிக்கவும்."]
    },


};

function App() {
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [tab, setTab] = useState("Tutor");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState("हिन्दी");
  const [uploadMessage, setUploadMessage] = useState("");

  function askTutor(e) {
    e.preventDefault();

    if (!question.trim()) return;

    setAnswer(answers[language]);
  }

  function speak(text) {
  alert("Voice feature will be connected to AI voice service in next stage of development.");
}

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="logo">V</div>

          <div>
            <strong>VernacAI</strong>
            <span>Learn without language barriers</span>
          </div>
        </div>

        <nav>
          {["Tutor", "Translate", "Quiz", "Progress", "Upload"].map((item) => (
            <button
              key={item}
              className={
                tab === item
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => setTab(item)}
            >
              {item === "Tutor" && "⭐️"}
              {item === "Translate" && "🔎"}
              {item === "Quiz" && "✅"}
              {item === "Progress" && "📈"}
              {item === "Upload" && "📄"}
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <small>TODAY'S PROGRESS</small>

          <strong>34%</strong>

          <div className="progress">
            <div></div>
          </div>

          <p>Keep learning for 12 more minutes.</p>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main">

        <header className="topbar">

          <div>
            <p className="eyebrow">
              AI-POWERED VERNACULAR LEARNING
            </p>

            <h1>
              Learn in the language that feels like home.
            </h1>

            <p className="subtitle">
              Ask, translate, simplify and practice with
              an AI learning companion.
            </p>
          </div>


          {/* LANGUAGE */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang}>
                {lang}
              </option>
            ))}
          </select>

        </header>


        {/* UPLOAD PAGE */}
        {tab === "Upload" && (
  <section className="upload-page">

    <div className="upload-header">

      <span className="pill">
        DOCUMENT & VIDEO TRANSLATOR
      </span>

      <h2>
        Upload your learning material
      </h2>

      <p>
        Upload a document or video and translate
        the content into your preferred language.
      </p>

    </div>

    <div className="upload-container">

      <label className="upload-area">

        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt,.mp4,.mov,.webm"
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              setUploadedFile(file);
              setUploadMessage("");
            }
          }}
        />

        <div className="upload-icon">
          📁
        </div>

        <h3>
          Upload your document or video
        </h3>

        <p>
          PDF, DOC, DOCX, TXT, MP4, MOV or WEBM
        </p>

        <span className="browse-button">
          Browse Files
        </span>

      </label>

      {uploadedFile && (
        <div className="file-preview">

          <div className="file-icon">
            {uploadedFile.type.startsWith("video/")
              ? "🎬"
              : "📄"}
          </div>

          <div className="file-info">

            <strong>
              {uploadedFile.name}
            </strong>

            <span>
              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </span>

          </div>

          <button
            className="remove-file"
            onClick={() => {
              setUploadedFile(null);
              setUploadMessage("");
            }}
          >
            ✕
          </button>

        </div>
      )}

      <div className="translation-options">

        <div>

          <label>
            Translate into
          </label>

          <select
            value={targetLanguage}
            onChange={(e) =>
              setTargetLanguage(e.target.value)
            }
          >
            <option>हिन्दी</option>
            <option>ਪੰਜਾਬੀ</option>
            <option>English</option>
            <option>বাংলা</option>
            <option>मराठी</option>
            <option>தமிழ்</option>
            <option>తెలుగు</option>
          </select>

        </div>

        <button
          className="primary translate-button"
          disabled={!uploadedFile}
          onClick={() => {

            if (!uploadedFile) return;

            setUploadMessage(
              `Your file is ready to translate into ${targetLanguage}.`
            );

          }}
        >
          Translate with AI →
        </button>

      </div>

      {uploadMessage && (
        <div className="upload-success">
          ✓ {uploadMessage}
        </div>
      )}

    </div>

  </section>
)} 
{tab === "Tutor" && (
  <>


            <section className="workspace">

              {/* QUESTION BOX */}
              <form
                className="ask-box"
                onSubmit={askTutor}
              >

                <label>
                  Ask your question
                </label>

                <textarea
                  value={question}
                  onChange={(e) =>
                    setQuestion(e.target.value)
                  }
                  placeholder="Example: Explain photosynthesis like I am 12 years old..."
                />

                <div className="ask-actions">

                  <button
                    type="button"
                    className="secondary"
                    onClick={() =>
                      speak(
                        question ||
                        "Please enter a question."
                      )
                    }
                  >
                    🎙 Speak
                  </button>

                  <button
                    type="submit"
                    className="primary"
                  >
                    Ask VernacAI →
                  </button>

                </div>

              </form>


              {/* ANSWER */}
              <div className="answer-box">

                {!answer ? (

                  <div className="empty">

                    <div className="empty-icon">
                      ✦
                    </div>

                    <h3>
                      Your explanation will appear here
                    </h3>

                    <p>
                      Ask a question to see the prototype
                      in action.
                    </p>

                  </div>

                ) : (

                  <>

                    <div className="answer-head">

                      <span className="pill">
                        AI EXPLANATION
                      </span>

                      <button
                        className="icon-btn"
                        onClick={() =>
                          speak(answer.text)
                        }
                      >
                        🔊
                      </button>

                    </div>


                    <h3>
                      {answer.title}
                    </h3>

                    <p>
                      {answer.text}
                    </p>


                    <ul>
                      {answer.bullets.map(
                        (bullet, index) => (
                          <li key={index}>
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>


                    <div className="confidence">
                      ✓ Simplified for your learning level
                    </div>

                  </>

                )}

              </div>

            </section>


            {/* FEATURES */}
            <section className="feature-grid">

              <div className="feature">
                <span>↔</span>

                <h3>
                  Real-time Translation
                </h3>

                <p>
                  Move between English, Hindi and Punjabi.
                </p>
              </div>


              <div className="feature">

                <span>⌁</span>

                <h3>
                  Simple Explanations
                </h3>

                <p>
                  Turn difficult notes into easy language.
                </p>

              </div>


              <div className="feature">

                <span>✓</span>

                <h3>
                  Practice & Quiz
                </h3>

                <p>
                  Generate questions to test understanding.
                </p>

              </div>

            </section>

          </>
        )}


        {/* OTHER PAGES */}
        {tab !== "Tutor" && (

          <section className="coming">

            <div className="empty-icon">
              ✦
            </div>

            <h2>
              {tab}
            </h2>

            <p>
              This module will be added in the next
              development stage.
            </p>

            <button
              className="primary"
              onClick={() => setTab("Tutor")}
            >
              Back to AI Tutor
            </button>

          </section>

        )}

      </main>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);