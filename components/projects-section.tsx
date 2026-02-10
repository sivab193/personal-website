import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "CityBus Bot",
      description: "Real-time Telegram bot for tracking CityBus in Greater Lafayette. Features fuzzy stop search, live arrival predictions, and automated subscription alerts.",
      technologies: ["Python", "GTFS", "Telegram API", "Google Cloud"],
      github: "https://github.com/sivab193/citybus-bot",
      demo: null,
      highlights: ["Real-time tracking", "Fuzzy search", "Automated alerts"],
    },
    {
      title: "Short-GPT",
      description: "Decoder-only transformer for shortest path prediction in graphs. Investigates if algorithmic alignment (RL) improves performance over supervised pretraining.",
      technologies: ["Python", "PyTorch", "Transformers", "Reinforcement Learning"],
      github: "https://github.com/MaxNickell/Short-GPT",
      demo: null,
      highlights: ["Graph Transformer", "RL Finetuning", "Algorithmic Alignment"],
    },
    {
      title: "Movies Tracker",
      description: "Comprehensive movie watch history tracker with global leaderboard, TitleCard timer, and granular privacy controls.",
      technologies: ["TypeScript", "Next.js", "Python", "Vercel"],
      github: "https://github.com/sivab193/movies-tracker",
      demo: "https://m19t.vercel.app/",
      highlights: ["Watch History", "Global Leaderboard", "TitleCard Timer"],
    },
    {
      title: "Statify",
      description: "Spotify statistics dashboard providing insights into listening habits, top artists, and tracks with a modern UI.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Spotify API"],
      github: "https://github.com/sivab193/statify",
      demo: "https://s19.vercel.app",
      highlights: ["Spotify Integration", "Listening Insights"],
    },
    {
      title: "Speed Cuber",
      description: "Specialized speed cubing platform with precision timer, solve history tracking, and performance analysis.",
      technologies: ["Next.js", "TypeScript", "CSS", "shadcn/ui"],
      github: "https://github.com/sivab193/speed-cuber",
      demo: "https://v0-speed-cubing-website.vercel.app",
      highlights: ["Precision Timer", "Solve Analysis", "Progress Tracking"],
    },
    {
      title: "Homeo",
      description: "Homeopathy tracking application and reminder system.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/sivab193/homeo",
      demo: "https://homeo-taupe.vercel.app",
      highlights: ["Tracking System", "Reminders", "Modern Web Architecture"],
    },
    {
      title: "SplitLLM",
      description: "Gen AI-based expense tracker with bill scanning via Gemini API. Uses graph algorithms to minimize cash flow.",
      technologies: ["Python", "Gemini API", "MongoDB", "React", "Graph Algorithms"],
      github: "https://github.com/sivab193",
      demo: "https://splitllm.vercel.app",
      highlights: ["Bill Scanning", "Cash Flow Minimization", "AI Chatbot"],
    },
    {
      title: "Cloud-Clip",
      description: "Cross-device clipboard management tool for real-time synchronization. Optimized with custom Firestore indexes.",
      technologies: ["TypeScript", "Firebase", "React", "Firestore"],
      github: "https://github.com/sivab193",
      demo: "https://cloud-clip.vercel.app",
      highlights: ["Real-time Sync", "Cross-Device", "Optimized Queries"],
    },
    {
      title: "LLMStudio API Gateway",
      description: "Secure API gateway for LMStudio exposing OpenAI-compatible endpoints with JWT auth and rate limiting.",
      technologies: ["TypeScript", "Node.js", "JWT", "Security"],
      github: "https://github.com/sivab193",
      demo: null,
      highlights: ["Secure Gateway", "JWT Auth", "Rate Limiting"],
    },
    {
      title: "Taxi Application",
      description: "C++ application for booking rides, calculating shortest routes using Dijkstra's algorithm, and fare estimation.",
      technologies: ["C++", "SQLite", "Dijkstra's Algorithm"],
      github: null,
      demo: null,
      highlights: ["Route Optimization", "Fare Estimation", "Ride Booking"],
    },
    {
      title: "Encryption in MIPS",
      description: "Encryption program in MIPS assembly converting text to pictorial format using modified Freemasonry Cipher.",
      technologies: ["MIPS Assembly", "Encryption", "Bitmap Interface"],
      github: null,
      demo: null,
      highlights: ["Assembly Language", "Cipher Implementation", "Visual Output"],
    },
    {
      title: "UAV Attack Detection",
      description: "Model to detect video replay attacks on UAVs using shadow analysis and Otsu's thresholding.",
      technologies: ["Image Processing", "Computer Vision", "Security"],
      github: null,
      demo: null,
      highlights: ["Replay Attack Detection", "Shadow Analysis", "Real-time"],
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
