"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Users, BookOpen, Award, TrendingUp } from "lucide-react"

export function EducationalEnvironments() {
  const programs = [
    {
      name: "AI Governance Certification (AIG-C)",
      level: "Advanced",
      enrolled: 45,
      completion: 78,
      nextSession: "Tomorrow, 2pm",
    },
    {
      name: "Peacekeeper Training",
      level: "Intermediate",
      enrolled: 128,
      completion: 65,
      nextSession: "Today, 4pm",
    },
    {
      name: "Citizen AI Literacy",
      level: "Beginner",
      enrolled: 892,
      completion: 82,
      nextSession: "Ongoing",
    },
    {
      name: "Parent & Guardian Safety",
      level: "Beginner",
      enrolled: 234,
      completion: 91,
      nextSession: "Wed, 10am",
    },
  ]

  const stats = [
    { label: "Active Learners", value: "1,299", icon: Users, color: "text-blue-400" },
    { label: "Courses Available", value: "24", icon: BookOpen, color: "text-purple-400" },
    { label: "Certifications Issued", value: "567", icon: Award, color: "text-emerald-400" },
    { label: "Avg Completion", value: "79%", icon: TrendingUp, color: "text-orange-400" },
  ]

  return (
    <Card className="bg-card/50 border-blue-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-400">
          <GraduationCap className="h-5 w-5" />
          Educational Environments
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="p-3 bg-background/50 rounded-lg border border-border">
                <Icon className={`h-4 w-4 ${stat.color} mb-1`} />
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="space-y-3 mt-4">
          {programs.map((program) => (
            <div key={program.name} className="p-3 bg-background/30 rounded-lg border border-border space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-sm">{program.name}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {program.level}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">{program.enrolled} enrolled</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Completion</span>
                  <span>{program.completion}%</span>
                </div>
                <Progress value={program.completion} className="h-1" />
              </div>
              <div className="text-xs text-muted-foreground">Next: {program.nextSession}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
