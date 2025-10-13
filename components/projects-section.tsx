import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "SplitLLM",
      description:
        "Distributed inference system for large language models enabling efficient model splitting across multiple devices. Achieved 40% reduction in inference latency through optimized layer distribution.",
      technologies: ["Python", "PyTorch", "gRPC", "Docker", "Kubernetes"],
      github: "https://github.com/sivaganesh193/splitllm",
      demo: null,
      highlights: ["40% latency reduction", "Distributed inference", "Model parallelism"],
    },
    {
      title: "Cloud-Clip",
      description:
        "Cross-platform clipboard synchronization service with end-to-end encryption. Supports real-time sync across devices with conflict resolution and offline support.",
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Redis", "AWS"],
      github: "https://github.com/sivaganesh193/cloud-clip",
      demo: null,
      highlights: ["E2E encryption", "Real-time sync", "Cross-platform"],
    },
    {
      title: "Data Privacy Platform",
      description:
        "Enterprise-grade platform for automating GDPR and CCPA compliance workflows at Visa. Processes 10M+ records daily with automated data discovery and classification.",
      technologies: ["Java", "Spring Boot", "React", "Kafka", "PostgreSQL", "AWS"],
      github: null,
      demo: null,
      highlights: ["10M+ records/day", "GDPR/CCPA compliance", "80% effort reduction"],
    },
    {
      title: "AI Expense Tracker",
      description:
        "Intelligent expense tracking application using computer vision to extract data from receipts. Features automatic categorization and spending insights powered by ML.",
      technologies: ["Python", "FastAPI", "React", "TensorFlow", "PostgreSQL", "Docker"],
      github: "https://github.com/sivaganesh193",
      demo: null,
      highlights: ["OCR integration", "ML categorization", "Spending insights"],
    },
    {
      title: "Real-time Monitoring Dashboard",
      description:
        "Comprehensive monitoring solution for data pipelines with real-time alerts and anomaly detection. Improved incident response time by 60%.",
      technologies: ["React", "TypeScript", "Spring Boot", "Grafana", "Prometheus", "Kafka"],
      github: null,
      demo: null,
      highlights: ["Real-time alerts", "Anomaly detection", "60% faster response"],
    },
    {
      title: "Distributed Task Scheduler",
      description:
        "Fault-tolerant distributed task scheduling system with dynamic load balancing. Handles 100K+ tasks daily with automatic retry and failure recovery.",
      technologies: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com/sivaganesh193",
      demo: null,
      highlights: ["100K+ tasks/day", "Fault-tolerant", "Auto-scaling"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Featured Projects</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in full-stack development, data engineering, and distributed
          systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="space-y-3 mb-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <span className="text-slate-400">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
