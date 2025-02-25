import { Loader2 } from "lucide-react"

interface LoadingProps {
  message?: string
}

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-2">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  )
}

