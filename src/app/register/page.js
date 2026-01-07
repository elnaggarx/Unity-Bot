'use client'

import Link from 'next/link'
import './register.css'
import unitylogo from '@/app/assets/unitylogo.png'
import ieeelogo from '@/app/assets/ieee.png'
import image from "@/app/assets/aast.webp"
import Image from 'next/image'
export default function RegisterWelcome() {


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
          <h1 className="welcome-title">Welcome to AASTbot</h1>
          <p className="description">
            We're thrilled you're here , UnityBot helps you build and explore with AI. Create an account to get started.
          </p>

          <div className="actions">
            <Link href="/register/signup" className="primaryBtn">
              Get started
            </Link>
            <Link href="/register/login" className="secondaryBtn">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
