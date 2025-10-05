import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function MentalHealthHub() {
  const hubMetrics = [
    {
      category: "Children & Adolescents (0-18)",
      utilization: 76,
      activeUsers: 342,
      privacyScore: 100,
      icon: Shield,
      color: "text-pink-400",
    },
    {
      category: "Adult Environments",
      utilization: 68,
      activeUsers: 1247,
      privacyScore: 98,
      icon: Users,
      color: "text-blue-400",
    },
    {
      category: "Workplace Support",
      utilization: 82,
      activeUsers: 856,
      privacyScore: 100,
      icon: TrendingUp,
      color: "text-green-400",
    },
  ]

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-400" />
            Mental Health Hub
          </h2>
          <p className="text-sm text-muted-foreground">Multi-modal support for all ages</p>
        </div>
        <Badge variant="outline" className="text-green-400 border-green-400">
          Safe & Secure
        </Badge>
      </div>

      <div className="space-y-4">
        {hubMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.category} className="p-4 rounded-lg bg-background/50 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-sm font-medium">{metric.category}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {metric.activeUsers} users
                </Badge>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Utilization Rate</span>
                    <span className="text-xs font-medium">{metric.utilization}%</span>
                  </div>
                  <Progress value={metric.utilization} className="h-1.5" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Privacy Compliance</span>
                    <span className="text-xs font-medium">{metric.privacyScore}%</span>
                  </div>
                  <Progress value={metric.privacyScore} className="h-1.5" />
                </div>
              </div>
            </div>
          )
        })}

        <div className="mt-4 p-3 rounded-lg bg-pink-400/10 border border-pink-400/30">
          <p className="text-xs text-muted-foreground">
            <strong className="text-pink-400">Quantum-Secure:</strong> All data protected with PQC. Separate
            environments for minors with mandatory guardian consent and age-gating protocols.
          </p>
        </div>
      </div>
    </Card>
  )
}
