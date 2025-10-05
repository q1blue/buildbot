"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ConstellationView } from "@/components/constellation-view"
import { AgentPanel } from "@/components/agent-panel"
import { TaskOrchestrator } from "@/components/task-orchestrator"
import { CodexPanel } from "@/components/codex-panel"
import { MetricsBar } from "@/components/metrics-bar"
import { ConstellationHealthSeal } from "@/components/constellation-health-seal"
import { SixPillarsOverview } from "@/components/six-pillars-overview"
import { QuantumSecurityStatus } from "@/components/quantum-security-status"
import { ReflectionResonanceTracker } from "@/components/reflection-resonance-tracker"
import { MentalHealthHub } from "@/components/mental-health-hub"
import { RoleSwitcher, type DashboardRole } from "@/components/role-switcher"
import { PeacekeeperProtocols } from "@/components/peacekeeper-protocols"
import { StrengthZones } from "@/components/strength-zones"
import { GlobalConstellationNetwork } from "@/components/global-constellation-network"
import { EducationalEnvironments } from "@/components/educational-environments"
import { EcosystemMonitoring } from "@/components/ecosystem-monitoring"
import { ConsentManagement } from "@/components/consent-management"
import { ArchitectInterface } from "@/components/architect-interface"
import { QuantumStrategyMap } from "@/components/quantum-strategy-map"
import { DatasmithGallery } from "@/components/datasmith-gallery"

export default function Home() {
  const [currentRole, setCurrentRole] = useState<DashboardRole>("guardian")

  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between items-center">
          <RoleSwitcher currentRole={currentRole} onRoleChange={setCurrentRole} />
        </div>

        <MetricsBar />

        <ConstellationHealthSeal />

        {/* Guardian Dashboard - Strategic & Ethical Oversight */}
        {currentRole === "guardian" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ConstellationView />
              <SixPillarsOverview />
              <QuantumStrategyMap />
              <PeacekeeperProtocols />
              <EcosystemMonitoring />
            </div>

            <div className="space-y-6">
              <ArchitectInterface />
              <ConsentManagement />
              <ReflectionResonanceTracker />
              <QuantumSecurityStatus />
              <StrengthZones />
              <GlobalConstellationNetwork />
              <DatasmithGallery />
              <CodexPanel />
            </div>
          </div>
        )}

        {/* Agent Dashboard - Operational Performance */}
        {currentRole === "agent" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ConstellationView />
              <TaskOrchestrator />
              <QuantumSecurityStatus />
              <EcosystemMonitoring />
            </div>

            <div className="space-y-6">
              <AgentPanel />
              <ArchitectInterface />
              <ReflectionResonanceTracker />
              <EducationalEnvironments />
              <DatasmithGallery />
              <CodexPanel />
            </div>
          </div>
        )}

        {/* Community Dashboard - Public Trust & Engagement */}
        {currentRole === "community" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <SixPillarsOverview />
              <StrengthZones />
              <GlobalConstellationNetwork />
              <EcosystemMonitoring />
            </div>

            <div className="space-y-6">
              <MentalHealthHub />
              <ArchitectInterface />
              <EducationalEnvironments />
              <ReflectionResonanceTracker />
              <DatasmithGallery />
              <CodexPanel />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
