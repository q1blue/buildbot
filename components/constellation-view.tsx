"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

export function ConstellationView() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const nodes = [
      { x: 150, y: 100, label: "Orchestrator", status: "active", connections: [1, 2, 3] },
      { x: 80, y: 200, label: "Researcher", status: "active", connections: [4] },
      { x: 220, y: 200, label: "Analyst", status: "active", connections: [4] },
      { x: 150, y: 300, label: "Writer", status: "processing", connections: [5] },
      { x: 150, y: 400, label: "Validator", status: "idle", connections: [5] },
      { x: 150, y: 500, label: "Publisher", status: "idle", connections: [] },
    ]

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw connections
      ctx.strokeStyle = "rgba(147, 51, 234, 0.2)"
      ctx.lineWidth = 1
      nodes.forEach((node, i) => {
        node.connections.forEach((targetIdx) => {
          const target = nodes[targetIdx]
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        const colors = {
          active: { fill: "rgba(147, 51, 234, 0.3)", stroke: "rgba(147, 51, 234, 1)" },
          processing: { fill: "rgba(59, 130, 246, 0.3)", stroke: "rgba(59, 130, 246, 1)" },
          idle: { fill: "rgba(100, 100, 100, 0.3)", stroke: "rgba(150, 150, 150, 1)" },
        }

        const color = colors[node.status as keyof typeof colors]

        // Glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = color.stroke

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fillStyle = color.fill
        ctx.fill()
        ctx.strokeStyle = color.stroke
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.shadowBlur = 0

        // Label
        ctx.fillStyle = "#ffffff"
        ctx.font = "11px Geist"
        ctx.textAlign = "center"
        ctx.fillText(node.label, node.x, node.y - 15)
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Agent Constellation</h2>
          <p className="text-sm text-muted-foreground">Real-time network topology</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-primary/50 text-primary">
            <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Live
          </Badge>
        </div>
      </div>

      <div className="relative h-[600px] bg-background/50 rounded-lg border border-border overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </Card>
  )
}
