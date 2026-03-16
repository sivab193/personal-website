## 2026-03-16 - Next.js App Router API Fetch Caching
**Learning:** Next.js App Router's `fetch` API defaults to `cache: 'no-store'` or similar behaviors in dynamic routes, which can cause slow page loads if fetching from external APIs on every request.
**Action:** Always check if external API calls in server components can be cached using Next.js Incremental Static Regeneration (ISR) via `next: { revalidate: <seconds> }` to significantly improve server response time and reduce external API load.
