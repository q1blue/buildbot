"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Code, Database, Search, Shield, Brain, Sparkles, Globe, Heart, Lock } from "lucide-react"

export function CodexPanel() {
  const codexEntries = [
    { id: 1, title: "CrewAI Codex Wiki", category: "Core", icon: BookOpen, updated: "Live", link: "#wiki" },
    {
      id: 2,
      title: "Guardian Training Simulator",
      category: "Training",
      icon: Shield,
      updated: "Live",
      link: "#training",
    },
    {
      id: 3,
      title: "Blueprint Node Architecture",
      category: "Architecture",
      icon: Code,
      updated: "Live",
      link: "#architecture",
    },
    {
      id: 4,
      title: "Audit Trail & Emotional Fidelity",
      category: "Governance",
      icon: Heart,
      updated: "2h ago",
      link: "#audit",
    },
    {
      id: 5,
      title: "Partner Integration & Privacy",
      category: "Security",
      icon: Lock,
      updated: "5h ago",
      link: "#privacy",
    },
    {
      id: 6,
      title: "Sacred Geometry Puzzle",
      category: "Education",
      icon: Sparkles,
      updated: "1d ago",
      link: "#geometry",
    },
    { id: 7, title: "Cutscene Sequences", category: "Media", icon: FileText, updated: "1d ago", link: "#cutscenes" },
    { id: 8, title: "Voice Narration Scripts", category: "Media", icon: Brain, updated: "2d ago", link: "#narration" },
    { id: 9, title: "Global Rollout Strategy", category: "Strategy", icon: Globe, updated: "3d ago", link: "#rollout" },
    {
      id: 10,
      title: "Legal Charter & Mandate",
      category: "Legal",
      icon: Database,
      updated: "1w ago",
      link: "#charter",
    },
  ]

  const [searchOpen, setSearchOpen] = useState(false)

  const handleEntryClick = (entry: (typeof codexEntries)[0]) => {
    console.log(`[v0] Opening codex entry: ${entry.title}`)
    // Future: Navigate to entry or open modal
  }

  const handleSearch = () => {
    setSearchOpen(!searchOpen)
    console.log(`[v0] Search ${searchOpen ? "closed" : "opened"}`)
  }

  const handleBrowseAll = () => {
    console.log("[v0] Opening full codex browser")
    // Future: Navigate to full codex view
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Knowledge Codex</h2>
          <p className="text-sm text-muted-foreground">Constellation documentation</p>
        </div>
        <Button variant="ghost" size="icon" onClick={handleSearch}>
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {codexEntries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => handleEntryClick(entry)}
            className="w-full p-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors text-left"
          >
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                <entry.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{entry.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {entry.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{entry.updated}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={handleBrowseAll}>
        <BookOpen className="h-4 w-4 mr-2" />
        Browse All Entries
      </Button>
    </Card>
  )
}
