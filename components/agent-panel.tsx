"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, MoreVertical } from "lucide-react"

export function AgentPanel() {
  const [agents, setAgents] = useState([
    { id: 1, name: "Orchestrator", role: "Coordinator", status: "active", tasks: 5 },
    { id: 2, name: "Researcher", role: "Data Collector", status: "active", tasks: 3 },
    { id: 3, name: "Analyst", role: "Data Processor", status: "active", tasks: 2 },
    { id: 4, name: "Writer", role: "Content Generator", status: "processing", tasks: 1 },
    { id: 5, name: "Validator", role: "Quality Control", status: "idle", tasks: 0 },
    { id: 6, name: "Publisher", role: "Output Handler", status: "idle", tasks: 0 },
  ])

  const statusColors = {
    active: "bg-primary text-primary-foreground",
    processing: "bg-blue-500 text-white",
    idle: "bg-muted text-muted-foreground",
  }

  const handleAddAgent = () => {
    const newAgent = {
      id: agents.length + 1,
      name: `Agent ${agents.length + 1}`,
      role: "New Role",
      status: "idle" as const,
      tasks: 0,
    }
    setAgents([...agents, newAgent])
  }

  const handleAgentMenu = (agentId: number) => {
    console.log(`[v0] Opening menu for agent ${agentId}`)
    // Future: Open dropdown menu with options
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Active Agents</h2>
          <p className="text-sm text-muted-foreground">Crew members online</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleAddAgent}>
          <Bot className="h-4 w-4 mr-2" />
          Add Agent
        </Button>
      </div>

      <div className="space-y-3">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">{agent.name}</p>
                <p className="text-xs text-muted-foreground">{agent.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className={statusColors[agent.status as keyof typeof statusColors]}>
                {agent.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{agent.tasks} tasks</span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleAgentMenu(agent.id)}>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
