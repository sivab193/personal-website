import { getRepoMeta } from "./github"
import {
  langColor,
  prettify,
  projectSeeds,
  type Project,
} from "./projects"

// Merge the curated seed list with live GitHub data, sorted newest-commit first.
// Called once per request from the server (app/page.tsx) and shared with both
// the projects grid and the terminal so they never drift out of sync.
export async function getProjects(): Promise<Project[]> {
  const items = await Promise.all(
    projectSeeds.map(async (seed): Promise<Project> => {
      const name = seed.repo.split("/")[1] ?? seed.repo
      const meta = await getRepoMeta(seed.repo)

      const demo = seed.demo !== undefined ? seed.demo : meta?.homepage ?? null
      const topics = meta?.topics ?? []
      const tags = topics.length
        ? topics
        : seed.fallbackTags ?? (meta?.language ? [meta.language] : [])
      const pushedAt = meta?.pushedAt ?? null
      const ogHash = pushedAt ? pushedAt.replace(/\D/g, "").slice(0, 10) : "1"

      return {
        slug: name.toLowerCase(),
        title: seed.title ?? prettify(name),
        description: meta?.description ?? seed.fallbackDescription ?? "",
        repo: seed.repo,
        github: meta?.htmlUrl ?? `https://github.com/${seed.repo}`,
        demo,
        language: meta?.language ?? null,
        languageColor: langColor(meta?.language ?? null),
        stars: meta?.stars ?? 0,
        topics,
        tags: tags.slice(0, 6),
        pushedAt,
        ogImage: `https://opengraph.githubassets.com/${ogHash}/${seed.repo}`,
        previewMode: seed.previewMode ?? "iframe",
      }
    }),
  )

  return items.sort((a, b) => {
    const ta = a.pushedAt ? Date.parse(a.pushedAt) : 0
    const tb = b.pushedAt ? Date.parse(b.pushedAt) : 0
    return tb - ta
  })
}
