// Live GitHub enrichment — runs on the server, cached via Next ISR.
// This replaces the old external `cb.siv19.dev` backend: all project
// automation now lives in this repo. Set GITHUB_TOKEN in the environment
// to lift the API rate limit from 60/hr (unauthenticated) to 5000/hr.

export interface RepoMeta {
  name: string
  description: string | null
  homepage: string | null
  htmlUrl: string
  language: string | null
  stars: number
  pushedAt: string | null
  topics: string[]
}

const GH_HEADERS: Record<string, string> = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
}

/**
 * Fetch repository metadata from the GitHub REST API.
 * Revalidates hourly (ISR) so cards auto-update without a redeploy.
 * Fails soft: returns null on any error so the card still renders from its seed.
 */
export async function getRepoMeta(repo: string): Promise<RepoMeta | null> {
  try {
    const headers: Record<string, string> = { ...GH_HEADERS }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      next: { revalidate: 3600 }, // auto-refresh every hour
      signal: AbortSignal.timeout(6000),
    })

    if (!res.ok) return null

    const d = await res.json()
    return {
      name: d.name,
      description: d.description ?? null,
      homepage: d.homepage && String(d.homepage).trim() ? String(d.homepage).trim() : null,
      htmlUrl: d.html_url,
      language: d.language ?? null,
      stars: d.stargazers_count ?? 0,
      pushedAt: d.pushed_at ?? null,
      topics: Array.isArray(d.topics) ? d.topics : [],
    }
  } catch {
    return null
  }
}
