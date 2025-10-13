"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([])

  const terminalLines = [
    "$ whoami",
    "sivaganesh-balaganesh",
    "$ cat skills.txt",
    "Python | Java | JavaScript | TypeScript",
    "React | Next.js | Node.js | Spring Boot",
    "AWS | Docker | Kubernetes | Terraform",
    "PostgreSQL | MongoDB | Redis | Kafka",
    "$ cat current_status.txt",
    "Seeking Summer 2025 Internship",
    "MS Computer Science @ Purdue University",
    "Previously: Senior SDE @ Visa",
    "$ _",
  ]

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines((prev) => [...prev, terminalLines[currentIndex]])
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 400)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-slate-900/50 border-cyan-500/30 p-6 font-mono text-sm backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-slate-400">terminal</span>
      </div>
      <div className="space-y-2 min-h-[300px]">
        {lines.map((line, index) => (
          <div key={index} className={`${line?.startsWith("$") ? "text-cyan-400" : "text-slate-300"} animate-fade-in`}>
            {line}
          </div>
        ))}
      </div>
    </Card>
  )
}
