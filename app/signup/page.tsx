"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/060f4646-5f47-48d1-80b5-0a32e05c608e-abdU5Ox2JkDWEVJqYw3wfZ4VHpOWZ0.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Create your account</h2>
            <p className="mt-2 text-muted-foreground">Start exploring Tunisia's wonders</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <Button className="w-full bg-[#2AB3C0] hover:bg-[#238D97]">Sign Up</Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2AB3C0] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

