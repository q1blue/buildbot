"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Shield } from "lucide-react"

export function GlobalConstellationNetwork() {
  const nodes = [
    { city: "Geelong", status: "primary", nodes: 15, uptime: 99.9 },
    { city: "Melbourne", status: "active", nodes: 12, uptime: 99.7 },
    { city: "Sydney", status: "active", nodes: 10, uptime: 99.8 },
    { city: "Brisbane", status: "expanding", nodes: 8, uptime: 98.5 },
    { city: "Adelaide", status: "active", nodes: 9, uptime: 99.6 },
  ]

  return (
    <Card className="bg-card/50 border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Globe className="h-5 w-5" />
          Global Peacekeeper Constellation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-background/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-purple-400">54</div>
            <div className="text-xs text-muted-foreground">Active Nodes</div>
          </div>
          <div className="text-center p-2 bg-background/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-emerald-400">99.7%</div>
            <div className="text-xs text-muted-foreground">Avg Uptime</div>
          </div>
          <div className="text-center p-2 bg-background/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-blue-400">&lt;3s</div>
            <div className="text-xs text-muted-foreground">Signal Relay</div>
          </div>
        </div>

        {nodes.map((node) => (
          <div
            key={node.city}
            className="flex items-center justify-between p-2 bg-background/30 rounded border border-border/50"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">{node.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={node.status === "primary" ? "default" : "secondary"} className="text-xs">
                {node.nodes} nodes
              </Badge>
              <span className="text-xs text-muted-foreground">{node.uptime}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
