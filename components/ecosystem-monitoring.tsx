"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TrendingUp } from "lucide-react"

export function EcosystemMonitoring() {
  const ecosystems = [
    {
      name: "Barwon River Network",
      status: "healthy",
      sensors: 24,
      metrics: {
        waterQuality: 92,
        biodiversity: 88,
        flowRate: "optimal",
      },
      alerts: 0,
    },
    {
      name: "Coastal Resilience Zone",
      status: "monitoring",
      sensors: 18,
      metrics: {
        erosion: "stable",
        marineLife: 85,
        temperature: "normal",
      },
      alerts: 1,
    },
    {
      name: "Urban Green Spine",
      status: "healthy",
      sensors: 32,
      metrics: {
        airQuality: 94,
        canopyCover: 78,
        soilHealth: 89,
      },
      alerts: 0,
    },
    {
      name: "Regenerative Agriculture",
      status: "thriving",
      sensors: 15,
      metrics: {
        soilCarbon: "increasing",
        waterRetention: 91,
        biodiversity: 93,
      },
      alerts: 0,
    },
  ]

  return (
    <Card className="bg-card/50 border-emerald-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Leaf className="h-5 w-5" />
          Ecosystem Monitoring
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {ecosystems.map((eco) => (
          <div key={eco.name} className="p-3 bg-background/50 rounded-lg border border-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{eco.name}</span>
              <div className="flex items-center gap-2">
                {eco.alerts > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {eco.alerts} alert
                  </Badge>
                )}
                <Badge
                  variant={eco.status === "healthy" || eco.status === "thriving" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {eco.status}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              {Object.entries(eco.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-2 bg-background/30 rounded border border-border/50">
                  <div className="font-medium text-emerald-400">{typeof value === "number" ? `${value}%` : value}</div>
                  <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{eco.sensors} active sensors</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Real-time
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
