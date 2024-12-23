'use client'

import { useState } from 'react'

export default function NotificationForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <form onSubmit={handleSubmit} className="notification-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="notification-input"
        required
      />
      <button
        type="submit"
        className="notification-button"
      >
        Notify Me
      </button>
    </form>
  )
}

