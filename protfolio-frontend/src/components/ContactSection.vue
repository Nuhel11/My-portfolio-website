<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref(null)
const loading = ref(false)

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const handleSubmit = async () => {
  loading.value = true
  status.value = null

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Failed to send message')

    status.value = { type: 'success', text: 'Thanks! Your message has been sent.' }
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    status.value = { type: 'error', text: err.message || 'Something went wrong.' }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="card">
      <h2 class="section-title">Contact</h2>
      <p class="section-subtitle">
        Have an opportunity, project idea, or just want to say hi? Drop me a message and I’ll get back.
      </p>

      <form
        @submit.prevent="handleSubmit"
        style="
          margin-top:1.75rem;
          display:grid;
          gap:1rem;
          max-width:480px;
        "
      >
        <div>
          <label style="font-size:0.85rem; display:block; margin-bottom:0.25rem;">Name</label>
          <input
            v-model="name"
            type="text"
            required
            style="
              width:100%;
              padding:0.55rem 0.7rem;
              border-radius:0.6rem;
              border:1px solid var(--border-color);
              background:var(--bg-elevated);
              color:var(--text-color);
            "
          />
        </div>
        <div>
          <label style="font-size:0.85rem; display:block; margin-bottom:0.25rem;">Email</label>
          <input
            v-model="email"
            type="email"
            required
            style="
              width:100%;
              padding:0.55rem 0.7rem;
              border-radius:0.6rem;
              border:1px solid var(--border-color);
              background:var(--bg-elevated);
              color:var(--text-color);
            "
          />
        </div>
        <div>
          <label style="font-size:0.85rem; display:block; margin-bottom:0.25rem;">Message</label>
          <textarea
            v-model="message"
            rows="5"
            required
            style="
              width:100%;
              padding:0.55rem 0.7rem;
              border-radius:0.6rem;
              border:1px solid var(--border-color);
              background:var(--bg-elevated);
              color:var(--text-color);
              resize:vertical;
            "
          ></textarea>
        </div>

        <button class="button" type="submit" :disabled="loading">
          <span v-if="!loading">Send Message</span>
          <span v-else>Sending...</span>
        </button>

        <p v-if="status" :style="{ fontSize: '0.9rem', color: status.type === 'success' ? '#16a34a' : '#dc2626' }">
          {{ status.text }}
        </p>
      </form>
    </div>
  </section>
</template>
