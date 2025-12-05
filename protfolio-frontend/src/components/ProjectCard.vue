<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="card" style="display:flex; flex-direction:column; gap:0.75rem;">
    <h3 style="font-size:1.1rem; font-weight:600;">{{ project.title }}</h3>
    <p style="font-size:0.9rem; color:var(--text-muted);">
      {{ project.description }}
    </p>
    <p style="font-size:0.85rem;">
      <strong>Highlight:</strong> {{ project.highlight }}
    </p>
    <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.5rem;">
      <span v-for="tag in project.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
    <div style="margin-top:0.9rem; display:flex; gap:0.75rem;">
      <a :href="`/projects/${project.id}`" class="button button-outline">Details</a>
      <a v-if="project.link" :href="project.link" target="_blank" class="button">Source</a>
    </div>
  </article>
</template>
