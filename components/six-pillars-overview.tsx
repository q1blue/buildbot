import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, Users, Leaf, Database, Heart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SixPillarsOverview() {
  const pillars = [
    {
      name: "Governance",
      icon: Building2,
      progress: 78,
      status: "active",
      metrics: "Custodian Forums • Strategic Plan",
      color: "text-blue-400",
    },
    {
      name: "Economics",
      icon: TrendingUp,
      progress: 65,
      status: "active",
      metrics: "Industry Hubs • Diversification",
      color: "text-green-400",
    },
    {
      name: "Municipal Life",
      icon: Users,
      progress: 82,
      status: "active",
      metrics: "Community Engagement • Infrastructure",
      color: "text-purple-400",
    },
    {
      name: "Earth & Energy",
      icon: Leaf,
      progress: 71,
      status: "active",
      metrics: "Environmental Monitoring • Regenerative",
      color: "text-emerald-400",
    },
    {
      name: "Quantum Data",
      icon: Database,
      progress: 94,
      status: "active",
      metrics: "Secure Comms • Cybersecurity",
      color: "text-cyan-400",
    },
    {
      name: "Mind & Health",
      icon: Heart,
      progress: 88,
      status: "active",
      metrics: "Privacy Protocols • Best Practices",
      color: "text-pink-400",
    },
  ]

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Six Pillars of Transformation</h2>
        <p className="text-sm text-muted-foreground">Geelong Blueprint progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div
              key={pillar.name}
              className="p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-5 w-5 ${pillar.color}`} />
                  <span className="font-medium text-sm">{pillar.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {pillar.progress}%
                </Badge>
              </div>
              <Progress value={pillar.progress} className="h-1.5 mb-2" />
              <p className="text-xs text-muted-foreground">{pillar.metrics}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
