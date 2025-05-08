import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  value: string
  label: string
  icon: ReactNode
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
        </div>
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}
