<template>
  <section id="about" class="section">
    <div class="card">
      <h2 class="section-title">About</h2>
      <p class="section-subtitle">
        I’m a full-stack web developer with a focus on modern JavaScript stacks. I enjoy turning complex
        problems into intuitive, performant interfaces and APIs.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap:1.5rem;
          margin-top:2rem;
        "
      >
        <div>
          <h3 style="font-size:0.95rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">
            Core Stack
          </h3>
          <ul style="padding-left:1.1rem; margin:0; font-size:0.9rem;">
            <li>Vue 3, Vue Router, Composition API</li>
            <li>Node.js, Express</li>
            <li>REST APIs, JSON</li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:0.95rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">
            Strengths
          </h3>
          <ul style="padding-left:1.1rem; margin:0; font-size:0.9rem;">
            <li>Clean, maintainable code</li>
            <li>API design and integration</li>
            <li>Performance & DX focus</li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:0.95rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">
            Currently Exploring
          </h3>
          <ul style="padding-left:1.1rem; margin:0; font-size:0.9rem;">
            <li>TypeScript in full-stack apps</li>
            <li>Testing (Vitest, Jest)</li>
            <li>DevOps & CI/CD workflows</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
