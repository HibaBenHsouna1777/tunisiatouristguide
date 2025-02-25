import type React from "react"
import Link from "next/link"
import { User } from "lucide-react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Mahdia Tourism
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link href="/cities-regions" className="hover:text-blue-500">
                Cities & Regions
              </Link>
              <div className="relative inline-block group">
                <span className="hover:text-blue-500 cursor-pointer">Sites</span>
                <div className="absolute hidden group-hover:block bg-gray-800 rounded shadow-lg">
                  <Link href="/historical-sites" className="block px-4 py-2 hover:bg-gray-700">
                    Historical Sites
                  </Link>
                  <Link href="/sea-sites" className="block px-4 py-2 hover:bg-gray-700">
                    Sea Sites
                  </Link>
                  <Link href="/natural-sites" className="block px-4 py-2 hover:bg-gray-700">
                    Natural Sites
                  </Link>
                </div>
              </div>
              <Link href="/restaurants" className="hover:text-blue-500">
                Restaurants
              </Link>
              <Link href="/guides" className="hover:text-blue-500">
                Guides
              </Link>
              <Link href="/plan-your-trip" className="hover:text-blue-500">
                Plan Your Trip
              </Link>
            </div>
            <Link href="/profile" className="text-white">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  )
}

export default Layout

