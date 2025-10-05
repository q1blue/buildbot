"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Layers, Zap } from "lucide-react"
import Image from "next/image"

export function QuantumStrategyMap() {
  const strategyRealms = [
    { name: "34D Strategy", level: "Central Core", color: "cyan" },
    { name: "26D Engiblse Ovotipok", level: "Far Right", color: "purple" },
    { name: "Igneous Globe Strategy", level: "Right", color: "cyan" },
    { name: "Peace Through Strength", level: "9D-16D", color: "blue" },
    { name: "Somerancy Sovereignty", level: "13D-16D", color: "teal" },
    { name: "Resilience Integration", level: "13D", color: "purple" },
  ]

  return (
    <Card className="border-purple-500/30 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-purple-400" />
            <CardTitle className="text-purple-100">Quantum Strategy Realms</CardTitle>
          </div>
          <Badge variant="outline" className="border-purple-500/50 text-purple-400">
            Multi-Dimensional
          </Badge>
        </div>
        <CardDescription className="text-purple-300/70">Infinite parallel realms across density levels</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Strategy Map Visualization */}
        <div className="relative aspect-square rounded-lg overflow-hidden border border-purple-500/30">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1759219088564.jpeg-5rSWFvMDBsIzAR9ELTPMyKGTKre4WP.png"
            alt="Infinite Quantum Strategy Realms"
            fill
            className="object-cover"
          />
        </div>

        {/* Key Realms */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">Active Strategy Nodes</span>
          </div>
          <div className="grid gap-2">
            {strategyRealms.map((realm, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-${realm.color}-400 animate-pulse`} />
                  <span className="text-xs text-purple-100">{realm.name}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {realm.level}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Density Levels */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-200">Density Range</span>
          </div>
          <span className="text-sm font-mono text-purple-300">1D → 34D</span>
        </div>
      </CardContent>
    </Card>
  )
}
