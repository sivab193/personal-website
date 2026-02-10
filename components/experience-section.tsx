import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Visa Inc.",
      role: "Senior Software Engineer",
      period: "Jul 2022 - Jul 2024",
      location: "Bangalore, India",
      achievements: [
        "Spearheaded the development of a Data Privacy Platform, automating compliance workflows and reducing manual effort by 80%",
        "Designed and implemented scalable ETL pipelines using Apache Spark and Kafka, processing 10M+ daily transactions",
        "Built real-time monitoring dashboards improving system observability and reducing incident response time by 40%",
        "Optimized database queries and API performance, resulting in a 30% reduction in latency",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "Apache Spark",
        "Kafka",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      company: "Bauble",
      role: "Head of Technology",
      period: "Jun 2022 - Jun 2024",
      location: "Remote",
      achievements: [
        "Co-founded and scaled an EdTech platform connecting 150+ students with resources and alumni mentorship",
        "Architected the full-stack web portal using React and Python, driving 40% user retention",
        "Developed predictive algorithms for university counseling, improving placement accuracy by 35%",
      ],
      technologies: ["Javascript", "Python", "Data Analytics", "Web Scraping", "Automation"],
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-950/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100">Work Experience</h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-cyan-500/30 p-8 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                  <p className="text-xl text-slate-100 mt-1">{exp.company}</p>
                </div>
                <div className="text-slate-400 mt-2 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
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
