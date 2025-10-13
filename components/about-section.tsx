import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-100">About Me</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm">
            <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Education</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-semibold">Purdue University</p>
                <p className="text-sm">MS Computer Science</p>
                <p className="text-sm text-slate-400">Aug 2024 - May 2026</p>
                <p className="text-sm text-slate-400">GPA: 4.0/4.0</p>
              </div>
              <div>
                <p className="font-semibold">Anna University (MIT Campus)</p>
                <p className="text-sm">BE Computer Science</p>
                <p className="text-sm text-slate-400">Aug 2018 - May 2022</p>
                <p className="text-sm text-slate-400">GPA: 9.45/10</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm">
            <Briefcase className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Experience</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-semibold">Visa Inc.</p>
                <p className="text-sm">Senior Software Engineer</p>
                <p className="text-sm text-slate-400">Jul 2022 - Jul 2024</p>
              </div>
              <div>
                <p className="font-semibold">Citicorp Services</p>
                <p className="text-sm">Software Engineering Intern</p>
                <p className="text-sm text-slate-400">Jan 2022 - Jun 2022</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-cyan-500/30 p-6 backdrop-blur-sm">
            <Award className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">Achievements</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Visa Bravo Award Winner (2023)</li>
              <li>• Published Research Paper (IEEE)</li>
              <li>• 4.0 GPA at Purdue University</li>
              <li>• Full-Stack & Data Engineering Expert</li>
            </ul>
          </Card>
        </div>

        <Card className="bg-slate-900/50 border-cyan-500/30 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Professional Summary</h3>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a passionate software engineer with expertise in building scalable data platforms and full-stack
              applications. Currently pursuing my Master's in Computer Science at Purdue University while actively
              seeking Summer 2025 internship opportunities.
            </p>
            <p>
              At Visa, I led the development of a comprehensive data privacy platform that automated compliance
              workflows and reduced manual effort by 80%. I architected data pipelines processing millions of records
              daily and built real-time monitoring systems that improved operational efficiency by 40%.
            </p>
            <p>
              My research interests include distributed systems, machine learning infrastructure, and privacy-preserving
              technologies. I'm particularly excited about building systems that operate at scale while maintaining high
              performance and reliability.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
