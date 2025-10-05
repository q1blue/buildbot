"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Clock, AlertCircle, Shield } from "lucide-react"

export function ConsentManagement() {
  const consentStats = {
    activeSeals: 148,
    totalNodes: 150,
    renewalRate: 98.7,
    pendingRenewals: 12,
    expiringSoon: 5,
  }

  const recentActivity = [
    {
      action: "Consent Renewed",
      node: "Mental Health Hub - Child Protection",
      user: "Guardian Council",
      time: "5 min ago",
      status: "approved",
    },
    {
      action: "Consent Pending",
      node: "Ecosystem Monitoring - Coastal Zone",
      user: "Environmental Steward",
      time: "15 min ago",
      status: "pending",
    },
    {
      action: "Consent Sealed",
      node: "Quantum Security - Encryption Layer",
      user: "Security Guardian",
      time: "1 hour ago",
      status: "approved",
    },
  ]

  return (
    <Card className="bg-card/50 border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Shield className="h-5 w-5" />
          Consent Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-background/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-emerald-400">
              {consentStats.activeSeals}/{consentStats.totalNodes}
            </div>
            <div className="text-xs text-muted-foreground">Active Consent Seals</div>
          </div>
          <div className="p-3 bg-background/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-purple-400">{consentStats.renewalRate}%</div>
            <div className="text-xs text-muted-foreground">Renewal Rate</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Consent Coverage</span>
            <span>{((consentStats.activeSeals / consentStats.totalNodes) * 100).toFixed(1)}%</span>
          </div>
          <Progress value={(consentStats.activeSeals / consentStats.totalNodes) * 100} className="h-2" />
        </div>

        {consentStats.expiringSoon > 0 && (
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-orange-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-orange-400">{consentStats.expiringSoon} seals expiring soon</p>
              <p className="text-xs text-muted-foreground">Review required within 48 hours</p>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Recent Activity</h4>
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="p-2 bg-background/30 rounded border border-border/50 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">{activity.action}</span>
                <Badge variant={activity.status === "approved" ? "default" : "secondary"} className="text-xs">
                  {activity.status === "approved" ? (
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                  ) : (
                    <Clock className="h-3 w-3 mr-1" />
                  )}
                  {activity.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{activity.node}</p>
              <div className="flex justify-between mt-1 text-muted-foreground">
                <span>{activity.user}</span>
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Shield className="h-4 w-4 mr-2" />
          Manage All Consents
        </Button>
      </CardContent>
    </Card>
  )
}
