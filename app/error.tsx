"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>{error.message || "An unexpected error occurred"}</AlertDescription>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => {
            // Ensure reset is a function before calling it
            if (typeof reset === "function") {
              reset()
            } else {
              // Fallback to window reload if reset is not available
              window.location.reload()
            }
          }}
        >
          Try again
        </Button>
      </Alert>
    </div>
  )
}

