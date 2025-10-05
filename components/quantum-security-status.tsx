import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function QuantumSecurityStatus() {
  const securityMetrics = [
    {
      name: "Post-Quantum Encryption Coverage",
      value: 100,
      target: 100,
      status: "success",
      description: "All nodes secured with PQC",
    },
    {
      name: "Zero-Trust Breach Attempts Blocked",
      value: 99.9,
      target: 99.9,
      status: "success",
      description: "Orion Messenger backbone secure",
    },
    {
      name: "Mean Time to Emergency Brake (MTTSEB)",
      value: 3.2,
      target: 5,
      status: "success",
      description: "Protocol breach response time (seconds)",
    },
  ]

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Lock className="h-5 w-5 text-cyan-400" />
            Quantum Security Posture
          </h2>
          <p className="text-sm text-muted-foreground">Post-quantum defense status</p>
        </div>
        <Badge variant="outline" className="text-green-400 border-green-400">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Secured
        </Badge>
      </div>

      <div className="space-y-4">
        {securityMetrics.map((metric) => (
          <div key={metric.name} className="p-3 rounded-lg bg-background/50 border border-border">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="text-sm font-medium">{metric.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              </div>
              <Badge variant="secondary" className="ml-2">
                {metric.name.includes("Time") ? `${metric.value}s` : `${metric.value}%`}
              </Badge>
            </div>
            {!metric.name.includes("Time") && <Progress value={metric.value} className="h-1.5" />}
          </div>
        ))}

        <div className="mt-4 p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/30">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-cyan-400">Quantum-Safe Infrastructure</p>
              <p className="text-xs text-muted-foreground mt-1">
                All communications protected with lattice-based cryptography. Zero-trust architecture enforced across
                all nodes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
