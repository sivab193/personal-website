import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  visible: boolean;
  lastCommitTimestamp: string;
  createdAt: string;
  updatedAt: string;
  highlights?: string[];
}

export async function ProjectsSection() {
  let projects: Project[] = [];
  try {
    const response = await fetch("https://cb.siv19.dev/api/projects", {
      signal: AbortSignal.timeout(5000), // 5 second timeout to prevent hanging requests
      next: { revalidate: 600 } // Cache projects data for 10 minutes to improve load time
    });
    if (response.ok) {
      const data: Project[] = await response.json();
      projects = data
        .filter(p => p.visible)
        .sort((a, b) => {
          const dateA = a.lastCommitTimestamp ? new Date(a.lastCommitTimestamp).getTime() : 0;
          const dateB = b.lastCommitTimestamp ? new Date(b.lastCommitTimestamp).getTime() : 0;
          return dateB - dateA;
        });
    }
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Featured Projects</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in full-stack development, data engineering, and distributed
          systems
        </p>

        {projects.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="h-8 w-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 font-medium">Loading projects...</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    {project.demo || project.github ? (
                      <a
                        href={project.demo || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline-flex items-center gap-2"
                        aria-label={`View ${project.title}`}
                      >
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 group-hover/title:underline transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink size={16} className="text-slate-500 opacity-0 group-hover/title:opacity-100 transition-opacity" aria-hidden="true" />
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    )}
                    {project.lastCommitTimestamp && (
                      <span className="text-xs text-slate-500">
                        Updated: {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(project.lastCommitTimestamp))}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
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
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span className="text-slate-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
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
        )}
      </div>
    </section>
  )
}
