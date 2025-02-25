"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User, ChevronDown } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  const [sitesOpen, setSitesOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cities & Regions", href: "/cities-regions" },
    {
      name: "Sites",
      href: "#",
      subItems: [
        { name: "Sharian Sites", href: "/sites/sharian" },
        { name: "Sea Sites", href: "/sites/sea" },
        { name: "Historical Sites", href: "/sites/historical" },
        { name: "Natural Sites", href: "/sites/natural" },
      ],
    },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Guides", href: "/guides" },
    { name: "Plan Your Trip", href: "/plan-your-trip" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black text-white shadow-md">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) =>
            item.subItems ? (
              <DropdownMenu key={item.name} open={sitesOpen} onOpenChange={setSitesOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center ${pathname.startsWith(item.href) ? "text-blue-400" : "text-white"}`}
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name}>
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400 underline" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>
        <div className="ml-auto">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

