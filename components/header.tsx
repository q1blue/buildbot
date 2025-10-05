"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Network, BookOpen, Settings, Activity } from "lucide-react"

export function Header() {
  const [activeNav, setActiveNav] = useState("dashboard")

  const handleNavClick = (nav: string) => {
    setActiveNav(nav)
    console.log(`[v0] Navigating to: ${nav}`)
    // Future: Implement actual navigation
  }

  const handleDeployCrew = () => {
    console.log("[v0] Deploying crew...")
    // Future: Implement crew deployment logic
  }

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Network className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 blur-lg bg-primary/30" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                CrewAI <span className="text-primary">Constellation</span>
              </h1>
              <p className="text-xs text-muted-foreground font-mono">Autonomous Agent Orchestration</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant={activeNav === "dashboard" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavClick("dashboard")}
            >
              <Activity className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={activeNav === "codex" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavClick("codex")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Codex
            </Button>
            <Button
              variant={activeNav === "settings" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavClick("settings")}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 glow-purple" onClick={handleDeployCrew}>
            Deploy Crew
          </Button>
        </div>
      </div>
    </header>
  )
}
