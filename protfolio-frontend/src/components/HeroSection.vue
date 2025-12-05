<template>
  <section id="top" class="section" style="display:flex; flex-wrap:wrap; align-items:center; gap:2.5rem;">
    <div style="flex:1 1 280px;">
      <p class="tag">Full-Stack Web Developer</p>
      <h1 style="font-size:2.5rem; margin:1rem 0 0.75rem; font-weight:800;">
        I build clean, fast, and reliable web experiences.
      </h1>
      <p style="color:var(--text-muted); max-width:480px; margin-bottom:1.5rem;">
        I’m a full-stack developer specializing in Vue.js and Node.js, crafting modern, performant
        applications from pixel to production.
      </p>

      <div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
        <a href="#projects" class="button">View Projects</a>
        <a href="#contact" class="button button-outline">Contact Me</a>
      </div>

      <div style="margin-top:1.75rem; display:flex; gap:1.5rem; font-size:0.9rem; color:var(--text-muted);">
        <span>🚀 3+ production-ready projects</span>
        <span>🛠️ Vue · Node · REST APIs</span>
      </div>
    </div>

    <div style="flex:1 1 260px;">
      <div
        class="card"
        style="
          min-height: 220px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          gap:1rem;
        "
      >
        <div>
          <p style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted); letter-spacing: 0.1em;">
            Snapshot
          </p>
          <h2 style="font-size:1.25rem; margin-top:0.4rem; margin-bottom:0.4rem;">
            Frontend + Backend in one brain.
          </h2>
          <p style="font-size:0.9rem; color:var(--text-muted);">
            From component architecture to database design: I ship complete solutions, not just UI.
          </p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          <span class="tag">Vue 3</span>
          <span class="tag">Node.js</span>
          <span class="tag">Express</span>
          <span class="tag">REST APIs</span>
        </div>
      </div>
    </div>
  </section>
</template>
