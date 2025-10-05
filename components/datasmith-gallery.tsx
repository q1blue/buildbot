"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, GitBranch, Workflow, ExternalLink, ImageIcon } from "lucide-react"
import Image from "next/image"

export function DatasmithGallery() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const codexNodes = [
    {
      id: "blueprint-orchestration",
      name: "Blueprint Orchestration",
      category: "Cosmic Orchestration",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1759211160615.jpg-7uz3wAkA9wkxnP1QzNUGmE0dTNJYxR.png",
      description: "Global Knowledge Orchestration Blueprint Codex",
      url: "https://thoth-guardian-cybersecurity-shield.atlassian.net/jira/dashboards",
    },
    {
      id: "quantum-strategy",
      name: "Quantum Strategy",
      category: "Strategic Framework",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1759219088564.jpeg-5rSWFvMDBsIzAR9ELTPMyKGTKre4WP.png",
      description: "Infinite Quantum Strategy Realms visualization",
      url: "#",
    },
    {
      id: "awakening-codex",
      name: "Awakening Codex",
      category: "Repository Portal",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1758620995741.jpeg-LZ56ZVeAYg3v3KHi15kFtQxiMOeCkE.png",
      description: "Thoth and the Awakening Codex Master Repository",
      url: "#",
    },
  ]

  return (
    <Card className="border-blue-500/30 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-400" />
            <CardTitle className="text-blue-100">Datasmith Gallery</CardTitle>
          </div>
          <Badge variant="outline" className="border-blue-500/50 text-blue-400">
            UE 5.7 Integration
          </Badge>
        </div>
        <CardDescription className="text-blue-300/70">Interactive knowledge orchestration nodes</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-4">
            <div className="grid gap-4">
              {codexNodes.map((node) => (
                <div
                  key={node.id}
                  className="group relative rounded-lg border border-blue-500/20 bg-slate-900/50 overflow-hidden hover:border-blue-500/40 transition-all cursor-pointer"
                  onClick={() => setActiveNode(node.id)}
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden border border-blue-500/30 flex-shrink-0">
                      <Image
                        src={node.image || "/placeholder.svg"}
                        alt={node.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-blue-100">{node.name}</h4>
                          <p className="text-xs text-blue-300/70">{node.description}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {node.category}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (node.url !== "#") window.open(node.url, "_blank")
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open Node
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-900/20 border border-green-500/30">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-300">DatasmithLite Plugin Active</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <GitBranch className="h-4 w-4" />
                  <span>Repository: crewai-constellation-codex</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Workflow className="h-4 w-4" />
                  <span>Pipeline: Datasmith → UE 5.7 → Orion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <ImageIcon className="h-4 w-4" />
                  <span>Assets: /Game/Datasmith/</span>
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500">
                  Sync Codex Manifest
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
