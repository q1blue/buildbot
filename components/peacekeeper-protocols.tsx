"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function PeacekeeperProtocols() {
  const protocols = [
    {
      name: "Emotional Fidelity Check",
      status: "active",
      score: 92,
      lastCheck: "2 min ago",
      icon: Heart,
    },
    {
      name: "Conflict Resolution",
      status: "monitoring",
      activeIncidents: 0,
      avgResolutionTime: "3.2 days",
      icon: Shield,
    },
    {
      name: "Consent Renewal Flow",
      status: "active",
      renewalRate: 98,
      pendingRenewals: 12,
      icon: CheckCircle2,
    },
    {
      name: "Guardian Alignment",
      status: "optimal",
      alignmentScore: 94,
      precincts: 15,
      icon: Shield,
    },
  ]

  return (
    <Card className="bg-card/50 border-emerald-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Shield className="h-5 w-5" />
          Peacekeeper Protocols
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {protocols.map((protocol) => {
          const Icon = protocol.icon
          return (
            <div key={protocol.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium">{protocol.name}</span>
                </div>
                <Badge
                  variant={protocol.status === "active" || protocol.status === "optimal" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {protocol.status}
                </Badge>
              </div>
              {protocol.score !== undefined && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Score</span>
                    <span>{protocol.score}%</span>
                  </div>
                  <Progress value={protocol.score} className="h-1" />
                </div>
              )}
              {protocol.renewalRate !== undefined && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Renewal Rate</span>
                    <span>{protocol.renewalRate}%</span>
                  </div>
                  <Progress value={protocol.renewalRate} className="h-1" />
                </div>
              )}
              {protocol.alignmentScore !== undefined && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Alignment</span>
                    <span>{protocol.alignmentScore}%</span>
                  </div>
                  <Progress value={protocol.alignmentScore} className="h-1" />
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                {protocol.lastCheck && `Last check: ${protocol.lastCheck}`}
                {protocol.avgResolutionTime && `Avg resolution: ${protocol.avgResolutionTime}`}
                {protocol.pendingRenewals !== undefined && `Pending: ${protocol.pendingRenewals}`}
                {protocol.precincts && `${protocol.precincts} precincts`}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
