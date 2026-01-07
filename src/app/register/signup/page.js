'use client'

import Link from 'next/link'
import '../register.css'
import unitylogo from '@/app/assets/unitylogo.png'
import ieeelogo from '@/app/assets/ieee.png'
import image from "@/app/assets/aast.webp"
import Image from 'next/image'
import { useState } from 'react'

export default function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    role: '',
    acceptTerms: false,
  })
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

    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all required fields.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!form.acceptTerms) {
      setError('You must accept the terms to continue.')
      return
    }

    // TODO: Replace with real signup API call
    setSuccess('Account created (demo). You can now log in.')
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

          <h1 className="welcome-title">Create your account</h1>
          <p className="description">Join AASTbot by creating an account to access the platform.</p>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="institution">Institution</label>
              <input id="institution" name="institution" value={form.institution} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role (Student, Researcher, etc.)</label>
              <input id="role" name="role" value={form.role} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" name="acceptTerms" checked={form.acceptTerms} onChange={handleChange} />
              <span className="form-note">I agree to the <a className="inline-link" href="#">terms</a>.</span>
            </label>

            {error && <div className="error" role="alert">{error}</div>}
            {success && <div className="success" role="status">{success}</div>}

            <div className="form-actions">
              <button type="submit" className="submitBtn">Sign up</button>
              <Link href="/register/login" className="cancelBtn">Already have an account? Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}