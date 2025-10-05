"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Wifi, Activity, Users } from "lucide-react"

export function StrengthZones() {
  const zones = [
    {
      name: "Central Precinct",
      status: "optimal",
      coverage: 98,
      uptime: 99.9,
      activeUsers: 234,
      peacekeepers: 8,
    },
    {
      name: "Waterfront District",
      status: "active",
      coverage: 95,
      uptime: 99.7,
      activeUsers: 189,
      peacekeepers: 6,
    },
    {
      name: "Innovation Quarter",
      status: "active",
      coverage: 97,
      uptime: 99.8,
      activeUsers: 312,
      peacekeepers: 10,
    },
    {
      name: "Cultural Hub",
      status: "expanding",
      coverage: 87,
      uptime: 98.5,
      activeUsers: 156,
      peacekeepers: 5,
    },
  ]

  return (
    <Card className="bg-card/50 border-blue-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-400">
          <MapPin className="h-5 w-5" />
          Strength Zones
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {zones.map((zone) => (
          <div key={zone.name} className="p-3 bg-background/50 rounded-lg border border-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{zone.name}</span>
              <Badge variant={zone.status === "optimal" ? "default" : "secondary"} className="text-xs">
                {zone.status}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Wifi className="h-3 w-3" />
                <span>Coverage: {zone.coverage}%</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Activity className="h-3 w-3" />
                <span>Uptime: {zone.uptime}%</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>{zone.activeUsers} users</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {zone.peacekeepers} PKs
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
