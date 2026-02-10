"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { TerminalAnimation } from "./terminal-animation"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Software Developer | AI Enthusiast"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-cyan-400 text-lg">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100">Sivaganesh B</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 min-h-[60px]">
              {displayText}
              <span className="animate-pulse"> |</span>
            </h2>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            MS Computer Science student at Purdue University with expertise in Full Stack Development, Cloud Computing, and Machine Learning.
            Previously Senior Software Engineer at Visa and SDE Intern at Citicorp.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white" asChild>
              <a href="/resume.pdf" download="Sivaganesh_Resume.pdf">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/sivab193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sivaganesh-balaganesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:sivaganesh193@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-delay">
          <TerminalAnimation />
        </div>
      </div>
    </section>
  )
}
