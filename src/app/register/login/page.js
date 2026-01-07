'use client'

import Link from 'next/link'
import '../register.css'
import unitylogo from '@/app/assets/unitylogo.png'
import ieeelogo from '@/app/assets/ieee.png'
import image from "@/app/assets/aast.webp"
import Image from 'next/image'
import { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.email || !form.password) {
      setError('Please enter your email and password.')
      return
    }

    // TODO: Replace with real login/API call
    setSuccess('Logged in (demo).')
  }

  return (
    <main className="splitContainer">
      <div className="left">
        <Image src={image} alt="Welcome" className="leftImage" />
      </div>

      <div className="right">
        <div className="inner">
          <div className="organization-logos">
            <Image src={unitylogo} alt="Unity x IEEE" className="collab-organization-logo-unity" />
            <Image src={ieeelogo} alt="Unity x IEEE" className="collab-organization-logo-ieee" />
          </div>

          <h1 className="welcome-title">Welcome back</h1>
          <p className="description">Sign in to continue to AASTbot.</p>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
                <span className="form-note">Remember me</span>
              </label>

              <a className="inline-link" href="#">Forgot password?</a>
            </div>

            {error && <div className="error" role="alert">{error}</div>}
            {success && <div className="success" role="status">{success}</div>}

            <div className="form-actions">
              <button type="submit" className="submitBtn">Log in</button>
              <Link href="/register/signup" className="cancelBtn">Don't have an account? Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}