import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Achievement {
  text: string
  link: string
}

interface Experience {
  company: string
  role: string
  period: string
  location: string
  achievements: (string | Achievement)[]
  technologies: string[]
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Visa Inc.",
      role: "Senior Software Engineer",
      period: "Jun 2022 - Jul 2025",
      location: "Bangalore, India",
      achievements: [
        "Owned and delivered a distributed Data Subject Rights platform supporting enterprise-scale GDPR/CCPA workflows.",
        "Migrated monolithic services to Spring Boot microservices, improving scalability and fault isolation.",
        "Built event-driven pipelines using Apache Kafka for asynchronous processing and escalation workflows.",
        "Executed low-downtime migration of 1M+ MySQL records, redesigning schemas and optimizing queries.",
        "Migrated encrypted artifacts to AWS S3, improving durability, availability, and cost efficiency.",
        "Implemented CI/CD pipelines with Jenkins and automated tests using JUnit and Mockito (85%+ coverage).",
        "Participated in code reviews, design discussions, and production incident resolution.",
        "Demonstrated end-to-end ownership from design through deployment and operations.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "Apache Kafka",
        "MySQL",
        "AWS S3",
        "Jenkins",
        "JUnit",
      ],
    },
    {
      company: "Madras Institute of Technology",
      role: "Software Developer Intern",
      period: "Jun 2020 - Apr 2022",
      location: "Chennai, India",
      achievements: [
        "Led a 6-member team to build a full-stack departmental portal using Angular, Node.js, GraphQL, and MySQL, delivering modules for academic management, placements, research, and an anonymous student feedback system.",
        "Optimized backend deployments by containerizing and scaling multiple backend services with PM2 on a single server, resulting in higher availability, efficient query resolution, and reduced downtime during updates.",
      ],
      technologies: ["Angular", "Node.js", "GraphQL", "MySQL", "PM2"],
    },
    {
      company: "Citicorp",
      role: "Software Developer Intern",
      period: "May 2021 - Jul 2021",
      location: "Chennai, India",
      achievements: [
        "Built a Java dashboard to visualize release metrics with real-time filtering and analytics.",
        "Implemented JUnit tests (80% coverage) and designed backend components using OOP and data structures.",
      ],
      technologies: ["Java", "JUnit", "OOP", "Data Structures"],
    },
    {
      company: "Bauble",
      role: "Head of Technology",
      period: "Jul 2020 - Jan 2021",
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
                    {typeof achievement === "string" ? (
                      <span>{achievement}</span>
                    ) : (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors underline decoration-cyan-500/30 underline-offset-4"
                      >
                        {achievement.text}
                      </a>
                    )}
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
