import { Card } from "@/components/ui/card"
import { TrendingUp, Zap, CheckCircle2, Clock } from "lucide-react"

export function MetricsBar() {
  const metrics = [
    { label: "Active Agents", value: "12", icon: Zap, trend: "+3", color: "text-primary" },
    { label: "Tasks Completed", value: "847", icon: CheckCircle2, trend: "+124", color: "text-green-400" },
    { label: "Avg Response Time", value: "1.2s", icon: Clock, trend: "-0.3s", color: "text-blue-400" },
    { label: "Success Rate", value: "98.4%", icon: TrendingUp, trend: "+2.1%", color: "text-purple-400" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <p className={`text-xs mt-1 ${metric.color}`}>{metric.trend}</p>
            </div>
            <metric.icon className={`h-5 w-5 ${metric.color}`} />
          </div>
        </Card>
      ))}
    </div>
  )
}
