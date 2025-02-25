"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const governorates = [
  { name: "Zaghouan", featuredSite: "Oudna" },
  { name: "Nabeul", featuredSite: "Kelibia" },
  { name: "Mahdia", featuredSite: "El Djem" },
  { name: "Tunis", featuredSite: "Carthage" },
]

export default function GovernorateNavigation() {
  const [selectedGovernorate, setSelectedGovernorate] = useState<string | null>(null)
  const router = useRouter()

  const handleGovernorateSelect = (governorate: string) => {
    setSelectedGovernorate(governorate)
    const selected = governorates.find((g) => g.name === governorate)
    if (selected) {
      router.push(`/governorate/${selected.name.toLowerCase()}`)
    }
  }

  return (
    <div className="bg-secondary py-2">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-sm font-medium">Explore by Governorate:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              {selectedGovernorate || "Select Governorate"} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {governorates.map((governorate) => (
              <DropdownMenuItem key={governorate.name} onSelect={() => handleGovernorateSelect(governorate.name)}>
                {governorate.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

