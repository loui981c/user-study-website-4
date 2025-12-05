import { COOKIE_MODEL, PAGES } from "./constants"; 

export function computeAllCookieStats(toggles) {
  const result = {};

  for (const page of PAGES) {
    const stats = computeCookieStatsForSite(page.name, toggles);
    result[page.id] = stats;
  }

  return result;
}

function computeCookieStatsForSite(siteType, toggles) {
  const model = COOKIE_MODEL[siteType];
  if (!model) {
    return { accepted: 0, declined: 0 };
  }

  let accepted = model.total;
  let declined = 0;

  const { categories } = model;

  Object.entries(categories).forEach(([cat, count]) => {
    const enabled = toggles[cat]; 

    if (!enabled) {
      accepted -= count;
      declined += count;
    }
  });

  if (accepted < 0) accepted = 0;
  if (declined > model.total) declined = model.total;

  return { accepted, declined };
}
