// Curated project catalog. This is the only hand-maintained list —
// title/description/link/language/stars/topics/last-commit all come live
// from GitHub (see lib/get-projects.ts). To add a project, add its repo here.

export const GITHUB_USER = "sivab193"

export interface ProjectSeed {
  /** owner/name on GitHub */
  repo: string
  /** display title override (defaults to a prettified repo name) */
  title?: string
  /** live-demo URL override (defaults to the repo's GitHub homepage field) */
  demo?: string | null
  /** how the preview thumbnail renders */
  previewMode?: "iframe" | "image"
  /** used only if GitHub is unreachable */
  fallbackDescription?: string
  fallbackTags?: string[]
}

export interface Project {
  slug: string
  title: string
  description: string
  repo: string
  github: string
  demo: string | null
  language: string | null
  languageColor: string
  stars: number
  topics: string[]
  tags: string[]
  pushedAt: string | null
  ogImage: string
  previewMode: "iframe" | "image"
}

// Seeded from public repos that have both a live link and a description,
// newest-push first. `statify` and `citybus-tracker` links are currently
// down, so they use GitHub's auto card image instead of a live iframe.
export const projectSeeds: ProjectSeed[] = [
  { repo: `${GITHUB_USER}/movies-tracker`, title: "Movies Tracker" },
  { repo: `${GITHUB_USER}/statify`, title: "Statify", previewMode: "image" },
  { repo: `${GITHUB_USER}/cuberverse`, title: "Cuberverse" },
  { repo: `${GITHUB_USER}/athi`, title: "Dr. Advaitham", demo: "https://advaitham.vercel.app/" },
  { repo: `${GITHUB_USER}/gmeet-stats`, title: "Google Meet Stats" },
  { repo: `${GITHUB_USER}/event-reminder`, title: "Event Reminder" },
  { repo: `${GITHUB_USER}/citybus-tracker`, title: "CityBus Tracker", previewMode: "image" },
]

// GitHub Linguist colors for the language dot.
const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  Shell: "#89e051",
  Go: "#00ADD8",
}

export function langColor(lang: string | null): string {
  return (lang && LANG_COLORS[lang]) || "#8b98ad"
}

export function prettify(name: string): string {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

export function relativeTime(iso: string | null): string {
  if (!iso) return ""
  const diff = Date.now() - Date.parse(iso)
  if (Number.isNaN(diff)) return ""
  const days = Math.floor(diff / 86_400_000)
  if (days <= 0) return "today"
  if (days === 1) return "yesterday"
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} mo ago`
  return `${Math.floor(days / 365)} yr ago`
}
