<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from '../data/projects'

const route = useRoute()
const project = computed(() => projects.find((p) => p.id === route.params.id))
</script>

<template>
  <section class="section">
    <div class="card" v-if="project">
      <h1 class="section-title">{{ project.title }}</h1>
      <p class="section-subtitle">{{ project.description }}</p>

      <div style="margin-top:1.5rem;">
        <h3 style="font-size:1rem; margin-bottom:0.5rem;">Tech stack</h3>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <p style="margin-top:1.5rem; font-size:0.95rem;">
        <strong>Highlight:</strong> {{ project.highlight }}
      </p>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        class="button"
        style="margin-top:1.75rem; display:inline-flex;"
      >
        View Source
      </a>
    </div>

    <div v-else class="card">
      <p>Project not found.</p>
    </div>
  </section>
</template>
