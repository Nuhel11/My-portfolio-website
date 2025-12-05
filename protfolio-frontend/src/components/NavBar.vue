<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: 'dark'
  }
})

const emit = defineEmits(['toggle-theme'])

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <header
    style="
      position: sticky;
      top: 0;
      z-index: 40;
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
      background: color-mix(in srgb, var(--bg-color) 80%, transparent);
    "
  >
    <nav
      style="
        max-width: 1120px;
        margin: 0 auto;
        padding: 0.8rem 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      "
    >
      <div style="font-weight: 700; letter-spacing: 0.04em; display: flex; align-items: center; gap: 0.5rem;">
        <span
          style="
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: radial-gradient(circle at 30% 0%, #4f46e5, #22d3ee);
          "
        ></span>
        <span>ZAKIR AHMED NUHEL</span>
      </div>

      <div style="display: flex; align-items: center; gap: 1.5rem;">
        <div
          class="nav-links"
          style="display: none;"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            style="font-size: 0.9rem; color: var(--text-muted);"
          >
            {{ item.label }}
          </a>
        </div>

        <button
          class="button-outline"
          type="button"
          @click="emit('toggle-theme')"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span v-if="theme === 'dark'">🌙 Dark</span>
          <span v-else>☀️ Light</span>
        </button>
      </div>
    </nav>
  </header>
</template>
