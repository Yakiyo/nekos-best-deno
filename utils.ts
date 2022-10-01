export const ENDPOINTS = [
  "baka",
  "bite",
  "blush",
  "bored",
  "cry",
  "cuddle",
  "dance",
  "facepalm",
  "feed",
  "happy",
  "highfive",
  "hug",
  "kiss",
  "kitsune",
  "laugh",
  "neko",
  "pat",
  "poke",
  "pout",
  "shrug",
  "slap",
  "sleep",
  "smile",
  "smug",
  "stare",
  "think",
  "thumbsup",
  "tickle",
  "wave",
  "wink",
  "waifu",
  "kick",
  "handhold",
  "punch",
  "shoot",
  "husbando",
  "yeet",
] as const;

export async function request(path: string) {
  const res = await fetch("https://nekos.best/api/v2/" + path);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch "${path}". Got status code ${res.status}.`,
    );
  }
  return await res.json();
}
