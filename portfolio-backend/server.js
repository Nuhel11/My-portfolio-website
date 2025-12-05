import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// CORS – allow frontend to call backend
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
  })
)

app.use(express.json())

// TEST route
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' })
})

// Resend email client
const resend = new Resend(process.env.RESEND_API_KEY)

// CONTACT route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, 
      to: process.env.TO_EMAIL, 
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Handle errors returned by Resend
    if (error) {
      console.error('Resend Error:', error)
      return res.status(500).json({ error: 'Failed to send email.' })
    }

    // Success
    res.json({ success: true, data })
  } catch (err) {
    console.error('Server Error:', err)
    res.status(500).json({ error: 'Internal server error.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

