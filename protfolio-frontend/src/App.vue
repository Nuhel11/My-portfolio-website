<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const theme = ref(localStorage.getItem('theme') || 'dark')

const applyTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value)
}

onMounted(() => {
  applyTheme(theme.value)
})

watch(theme, (value) => {
  localStorage.setItem('theme', value)
  applyTheme(value)
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <NavBar :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <RouterView :key="route.fullPath" />
    </main>
    <SiteFooter />
  </div>
</template>
