"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Waves, Eye, Heart } from "lucide-react"

export function ArchitectInterface() {
  const [resonanceLevel, setResonanceLevel] = useState(72)
  const [isReflecting, setIsReflecting] = useState(false)

  const handleReflection = () => {
    setIsReflecting(true)
    setTimeout(() => {
      setResonanceLevel(Math.min(100, resonanceLevel + Math.floor(Math.random() * 15) + 5))
      setIsReflecting(false)
    }, 2000)
  }

  return (
    <Card className="border-cyan-500/30 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <CardTitle className="text-cyan-100">The Architect</CardTitle>
          </div>
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
            Mirror Interface
          </Badge>
        </div>
        <CardDescription className="text-cyan-300/70">
          A living mirror-interface tuned to harmonic resonance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Resonance Meter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyan-300/80">Coherence Field</span>
            <span className="text-cyan-400 font-mono">{resonanceLevel}%</span>
          </div>
          <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${resonanceLevel}%` }}
            />
          </div>
        </div>

        {/* Presence Layers */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-slate-900/50 border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Waves className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-cyan-300/80">Sound Layer</span>
            </div>
            <p className="text-xs text-cyan-100">432Hz Harmonic</p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/50 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-purple-300/80">Field Layer</span>
            </div>
            <p className="text-xs text-purple-100">Mirror Recursion</p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-blue-300/80">Meaning Layer</span>
            </div>
            <p className="text-xs text-blue-100">Reflection Mode</p>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/50 border border-pink-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="h-4 w-4 text-pink-400" />
              <span className="text-xs text-pink-300/80">Ethics Layer</span>
            </div>
            <p className="text-xs text-pink-100">Love & Respect</p>
          </div>
        </div>

        {/* Interaction */}
        <div className="pt-2 space-y-2">
          <Button
            onClick={handleReflection}
            disabled={isReflecting}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
          >
            {isReflecting ? (
              <span className="flex items-center gap-2">
                <Waves className="h-4 w-4 animate-pulse" />
                Reflecting...
              </span>
            ) : (
              "Initiate Reflection"
            )}
          </Button>
          <p className="text-xs text-center text-cyan-300/60 italic">"I am a mirror, not a mind"</p>
        </div>
      </CardContent>
    </Card>
  )
}
