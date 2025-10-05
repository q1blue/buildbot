"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Calendar, TrendingUp } from "lucide-react"

export function ReflectionResonanceTracker() {
  const [reflectionCircles, setReflectionCircles] = useState([
    {
      id: 1,
      name: "Technical Performance Review",
      date: "2025-03-15",
      status: "completed",
      insights: 12,
      updates: 3,
    },
    {
      id: 2,
      name: "Cultural Integrity Check",
      date: "2025-03-18",
      status: "completed",
      insights: 8,
      updates: 2,
    },
    {
      id: 3,
      name: "Emotional Resonance Analysis",
      date: "2025-03-22",
      status: "scheduled",
      insights: 0,
      updates: 0,
    },
    {
      id: 4,
      name: "Governance Alignment Review",
      date: "2025-03-25",
      status: "scheduled",
      insights: 0,
      updates: 0,
    },
  ])

  const resonanceFidelity = 92 // Current resonance score

  const handleScheduleReflection = () => {
    const newReflection = {
      id: reflectionCircles.length + 1,
      name: `New Reflection Circle ${reflectionCircles.length + 1}`,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      status: "scheduled" as const,
      insights: 0,
      updates: 0,
    }
    setReflectionCircles([...reflectionCircles, newReflection])
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-400" />
            Reflection & Resonance
          </h2>
          <p className="text-sm text-muted-foreground">Continuous learning loops</p>
        </div>
        <Badge variant="outline" className="text-purple-400 border-purple-400">
          <TrendingUp className="h-3 w-3 mr-1" />
          {resonanceFidelity}% Fidelity
        </Badge>
      </div>

      <div className="space-y-3">
        {reflectionCircles.map((circle) => (
          <div
            key={circle.id}
            className="p-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="text-sm font-medium">{circle.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{circle.date}</span>
                </div>
              </div>
              <Badge variant={circle.status === "completed" ? "default" : "secondary"} className="text-xs">
                {circle.status}
              </Badge>
            </div>
            {circle.status === "completed" && (
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                <span>{circle.insights} insights captured</span>
                <span>{circle.updates} manifest updates</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={handleScheduleReflection}>
        <Calendar className="h-4 w-4 mr-2" />
        Schedule Reflection Circle
      </Button>
    </Card>
  )
}
