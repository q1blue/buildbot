"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ListTodo, Play, Pause, Clock, Activity } from "lucide-react"

export function TaskOrchestrator() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Market Research Analysis", agent: "Researcher", status: "running", progress: 75 },
    { id: 2, name: "Competitive Intelligence Report", agent: "Analyst", status: "running", progress: 45 },
    { id: 3, name: "Content Generation - Blog Post", agent: "Writer", status: "running", progress: 30 },
    { id: 4, name: "Data Validation Pipeline", agent: "Validator", status: "queued", progress: 0 },
    { id: 5, name: "Multi-channel Publishing", agent: "Publisher", status: "queued", progress: 0 },
  ])

  const toggleTaskStatus = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "running" ? "queued" : "running",
              progress: task.status === "queued" ? 0 : task.progress,
            }
          : task,
      ),
    )
  }

  const handleNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: `New Task ${tasks.length + 1}`,
      agent: "Unassigned",
      status: "queued" as const,
      progress: 0,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Task Orchestration</h2>
          <p className="text-sm text-muted-foreground">Active workflows and pipelines</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleNewTask}>
          <ListTodo className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm">{task.name}</p>
                  {task.status === "running" ? (
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      <Activity className="h-3 w-3 mr-1" />
                      Running
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-muted-foreground/50">
                      <Clock className="h-3 w-3 mr-1" />
                      Queued
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Assigned to: {task.agent}</p>
              </div>

              <div className="flex gap-1">
                {task.status === "running" ? (
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleTaskStatus(task.id)}>
                    <Pause className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleTaskStatus(task.id)}>
                    <Play className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {task.status === "running" && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary font-mono">{task.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
