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
                <p className="text-sm text-slate-400">Aug 2025 - Present</p>
              </div>
              <div>
                <p className="font-semibold">Madras Institute of Technology, Anna University</p>
                <p className="text-sm">BE Computer Science and Engineering (Honours)</p>
                <p className="text-sm text-slate-400">Aug 2018 - May 2022</p>
                <p className="text-sm text-slate-400">GPA: 9.11/10</p>
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
                <p className="text-sm text-slate-400">Jul 2022 - Jul 2025</p>
              </div>
              <div>
                <p className="font-semibold">Citicorp</p>
                <p className="text-sm">Software Engineering Intern</p>
                <p className="text-sm text-slate-400">Jan 2021 - Jun 2021</p>
              </div>
              <div>
                <p className="font-semibold">Data Centre, Madras Institute of Technology</p>
                <p className="text-sm">Software Engineering Intern</p>
                <p className="text-sm text-slate-400">Jun 2020 - Apr 2022</p>
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
              I am a graduate student at Purdue University specializing in Computer Science, with a strong foundation in building scalable applications and data platforms.
              My experience spans across fintech, edtech, and research, where I've delivered high-impact solutions using modern technologies.
              At Visa, I led the development of a comprehensive data privacy platform that automated compliance
              workflows and reduced manual effort by 80%. I architected data pipelines processing millions of records
              daily and built real-time monitoring systems that improved operational efficiency by 40%.
              My technical expertise includes Java, Python, C++, and Full Stack development with React and Node.js.
              I am passionate about leveraging AI and Cloud technologies to solve complex problems and drive innovation.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
