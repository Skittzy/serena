import React from "react";

export default function MainContent() {
  return (
    <main className="main">
      <div className="intro">
        <img
          src="/serena.png"
          alt="Serena"
          className="intro-profile-img"
        />
        <h2>
          Serena <span className="badge">Plus</span>
        </h2>
        <p>How are you feeling today? You can ask me anything.</p>
      </div>

      <div className="info-boxes">
        <div className="info-section">
          <h3>🗨️ Examples</h3>
          <ul>
            <li>"How does today's weather affect my mood?"</li>
            <li>"Can you guide me through a 3-minute breathing exercise?"</li>
            <li>"Is the air pollution in my area impacting my mental focus?"</li>
          </ul>
        </div>
        <div className="info-section">
          <h3>🧠 Capabilities</h3>
          <ul>
            <li>Responds empathetically based on real-time environmental conditions.</li>
            <li>Provides calming prompts, mood check-ins, and guided relaxation exercises.</li>
            <li>Uses satellite data to provide context-aware mental health support.</li>
          </ul>
        </div>
        <div className="info-section">
          <h3>⚠️ Limitations</h3>
          <ul>
            <li>Not a replacement for licensed therapy or crisis intervention.</li>
            <li>Dependent on availability and accuracy of satellite/environmental data.</li>
            <li>May not fully understand nuanced or culturally specific emotional expressions.</li>
          </ul>
        </div>
      </div>

      <div className="chat-bar">
        <input type="text" placeholder="Type message" />
        <button>🎤</button>
      </div>
    </main>
  );
}
