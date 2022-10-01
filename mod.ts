/*
 * Deno module for nekos.best
 * Authored & maintained by Yakiyo.
 * Licensed under MIT License
 */

import { ENDPOINTS, request } from "./utils.ts";

type CATEGORY = typeof ENDPOINTS[number];
export type NBResponse = {
  url: string;
  artist_href?: string;
  artist_name?: string;
  source_url?: string;
  anime_name?: string;
};
/**
 * Fetches a random image from an endpoint
 * @param {string} [category] If specified uses the category, else uses a random category
 * @returns {NBResponse}
 */
export async function getRandom(category?: CATEGORY): Promise<NBResponse> {
  if (category && !ENDPOINTS.includes(category)) {
    throw new Error(
      `${category} is invalid. Must be one of ${ENDPOINTS.join(", ")}`,
    );
  }
  const cat = category ||
    ENDPOINTS[Math.floor(Math.random() * ENDPOINTS.length)];
  const res = await request(cat);
  return res.results[0];
}

/**
 * Fetches multiple results for an endpoint
 * @param {CATEGORY} category The category to use from
 * @param {number} [amount=5]
 * @returns {*}  {Promise<NBResponse[]>}
 */
export async function getMultiple(
  category: CATEGORY,
  amount = 5,
): Promise<NBResponse[]> {
  if (category && !ENDPOINTS.includes(category)) {
    throw new Error(
      `${category} is invalid. Must be one of ${ENDPOINTS.join(", ")}`,
    );
  }
  if (typeof amount != "number" || amount > 20) amount = 20;
  return await request(`${category}?amount=${amount}`).then((res) =>
    res.results
  );
}
