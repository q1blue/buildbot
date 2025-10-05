"use client"
import { Button } from "@/components/ui/button"
import { Shield, Cpu, Users } from "lucide-react"

export type DashboardRole = "guardian" | "agent" | "community"

interface RoleSwitcherProps {
  currentRole: DashboardRole
  onRoleChange: (role: DashboardRole) => void
}

export function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  const roles = [
    { id: "guardian" as const, label: "Guardian", icon: Shield, color: "text-emerald-400" },
    { id: "agent" as const, label: "Agent", icon: Cpu, color: "text-purple-400" },
    { id: "community" as const, label: "Community", icon: Users, color: "text-blue-400" },
  ]

  return (
    <div className="flex items-center gap-2 p-1 bg-card/50 rounded-lg border border-border">
      {roles.map((role) => {
        const Icon = role.icon
        const isActive = currentRole === role.id
        return (
          <Button
            key={role.id}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => onRoleChange(role.id)}
            className={isActive ? "glow-purple" : ""}
          >
            <Icon className={`h-4 w-4 mr-2 ${isActive ? "" : role.color}`} />
            {role.label}
          </Button>
        )
      })}
    </div>
  )
}
