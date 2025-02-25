"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Implement logout logic here (e.g., clear session, tokens, etc.)
    console.log("Logging out...")

    // Redirect to the home page after a short delay
    const timer = setTimeout(() => {
      router.push("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Logging Out</h1>
        <p className="text-xl">Thank you for using Tunisia Tourist Guide. See you soon!</p>
      </div>
    </div>
  )
}

