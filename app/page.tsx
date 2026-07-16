import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getProjects } from "@/lib/get-projects"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      <Navigation />
      <main>
        <HeroSection projects={projects} />
        <SectionWrapper delay={0.2}>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <ExperienceSection />
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <ProjectsSection projects={projects} />
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <SkillsSection />
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <ContactSection />
        </SectionWrapper>
      </main>
      <ScrollToTop />
    </div>
  )
}
