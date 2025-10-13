"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "Go",
        "C++",
        "React",
        "Next.js",
        "Node.js",
        "Spring Boot",
        "FastAPI",
        "Express",
      ],
    },
    {
      icon: Database,
      title: "Data & Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "DynamoDB",
        "Apache Kafka",
        "Apache Spark",
        "Airflow",
        "ETL Pipelines",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, Lambda, RDS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
        "Grafana",
        "Prometheus",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Linux",
        "REST APIs",
        "GraphQL",
        "gRPC",
        "WebSocket",
        "Microservices",
        "System Design",
        "Agile/Scrum",
        "CI/CD",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Technical Skills</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Comprehensive skill set spanning full-stack development, data engineering, and cloud infrastructure
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="bg-slate-900/50 border-cyan-500/30 p-8 backdrop-blur-sm mt-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Areas of Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Full-Stack Development</h4>
              <p className="text-sm">Building scalable web applications with modern frameworks and best practices</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Data Engineering</h4>
              <p className="text-sm">Designing and implementing robust data pipelines and ETL workflows</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">System Design</h4>
              <p className="text-sm">Architecting distributed systems with high availability and scalability</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
