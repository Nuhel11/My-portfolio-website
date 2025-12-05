<script setup>
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title">Projects</h2>
    <p class="section-subtitle">
      A selection of the applications I’ve built using Vue.js, Node.js, and modern web tooling.
    </p>

    <div
      style="
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap:1.5rem;
        margin-top:2rem;
      "
    >
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
