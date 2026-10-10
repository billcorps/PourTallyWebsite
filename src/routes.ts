export const pages = [
  {
    id: "home",
    path: "/",
    title: "PourTally — Track your drinks and spending",
    description:
      "Track drinks, calories, alcohol, and spending with PourTally for Android. See how much you drink, what you spend, and when it adds up. All features free.",
  },
  {
    id: "app",
    path: "/app/",
    title: "Meet the app — PourTally",
    description:
      "Search 8,200+ drinks offline. Save servings, places, and prices. Log one or several drinks now or earlier, track spending, use widgets, and export JSON backups.",
  },
  {
    id: "insights",
    path: "/insights/",
    title: "Drinks, costs, and habits — PourTally insights",
    description:
      "Track drinks and spending by calendar day, week, or month. Compare habits, nutrition, and places, with missing details and separate currencies clearly shown.",
  },
  {
    id: "privacy",
    path: "/privacy/",
    title: "Privacy policy — PourTally",
    description:
      "How PourTally handles your drink history, recorded prices, optional saved places, Google services, purchases, widgets, JSON backups, support email, and this website.",
  },
  {
    id: "not-found",
    path: "/404.html",
    title: "Page not found — PourTally",
    description:
      "This page could not be found. Open the PourTally home page to continue.",
  },
] as const;

export type PageId = (typeof pages)[number]["id"];

export function getPage(pathname: string, base = "/") {
  const normalizedBase = `/${base.replace(/^\/+|\/+$/g, "")}`;
  let path = pathname;
  if (
    normalizedBase !== "/" &&
    (path === normalizedBase || path.startsWith(`${normalizedBase}/`))
  ) {
    path = path.slice(normalizedBase.length) || "/";
  }
  path = path.replace(/\/index\.html$/, "/").replace(/\/+$/, "") || "/";
  return (
    pages.find((page) => (page.path.replace(/\/+$/, "") || "/") === path) ??
    pages.find((page) => page.id === "not-found")!
  );
}
