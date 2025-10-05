"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ConstellationHealthSeal() {
  // CHS calculated from: Active Consent Seal Ratio (50%), Human Guardian Oversight (30%), Pulse of Consent (20%)
  const consentSealRatio = 96 // 128/150 active seals
  const guardianOversight = 100 // All critical actions reviewed
  const pulseOfConsent = 87 // Community sentiment score

  const chsScore = consentSealRatio * 0.5 + guardianOversight * 0.3 + pulseOfConsent * 0.2

  const getStatus = (score: number) => {
    if (score >= 95) return { label: "Active", color: "text-green-400", icon: CheckCircle2, bg: "bg-green-400/20" }
    if (score >= 80) return { label: "Warning", color: "text-yellow-400", icon: AlertTriangle, bg: "bg-yellow-400/20" }
    return { label: "Critical", color: "text-red-400", icon: AlertTriangle, bg: "bg-red-400/20" }
  }

  const status = getStatus(chsScore)
  const StatusIcon = status.icon

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Constellation Health Seal
          </h2>
          <p className="text-sm text-muted-foreground">Human sovereignty alignment</p>
        </div>
        <Badge variant="outline" className={`${status.color} border-current`}>
          <StatusIcon className="h-3 w-3 mr-1" />
          {status.label}
        </Badge>
      </div>

      <div className="space-y-6">
        {/* Main CHS Score */}
        <div className="text-center">
          <div
            className={`inline-flex items-center justify-center h-32 w-32 rounded-full ${status.bg} border-2 ${status.color} border-current mb-2`}
          >
            <div className="text-center">
              <div className="text-4xl font-bold">{chsScore.toFixed(1)}</div>
              <div className="text-xs opacity-70">CHS Score</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {chsScore >= 95
              ? "Human sovereignty is secured"
              : chsScore >= 80
                ? "Requires Guardian review"
                : "Emergency halt triggered"}
          </p>
        </div>

        {/* Component Metrics */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Active Consent Seal Ratio</span>
              <span className="text-sm font-medium">{consentSealRatio}%</span>
            </div>
            <Progress value={consentSealRatio} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">128/150 nodes sealed • 50% weight</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Human Guardian Oversight</span>
              <span className="text-sm font-medium">{guardianOversight}%</span>
            </div>
            <Progress value={guardianOversight} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">All critical actions reviewed • 30% weight</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Pulse of Consent Index</span>
              <span className="text-sm font-medium">{pulseOfConsent}%</span>
            </div>
            <Progress value={pulseOfConsent} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">Community sentiment positive • 20% weight</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
