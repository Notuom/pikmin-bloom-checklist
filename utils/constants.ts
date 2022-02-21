import { DecorStatus, PikminColor } from "./types";

/**
 * List representing all the decors that can be obtained.
 */
export const decors: string[] = [
  "restaurant",
  "cafe",
  "sweetshop",
  "movie-theater",
  "pharmacy",
  "zoo",
  "forest-1",
  "forest-2",
  "waterside",
  "post-office",
  "art-gallery",
  "airport",
  "station",
  "beach",
  "hamburger-shop",
  "mini-mart",
  "supermarket-1",
  "supermarket-2",
  "bakery",
  "hair-salon",
  "clothing-store",
  "park",
  "roadside",
  "alpha-a",
  "alpha-b",
  "alpha-c",
  "alpha-d",
  "alpha-e",
  "alpha-f",
  "alpha-g",
  "alpha-h",
  "alpha-i",
  "alpha-j",
  "alpha-k",
  "alpha-l",
  "alpha-m",
  "alpha-n",
  "alpha-o",
  "alpha-p",
  "alpha-q",
  "alpha-r",
  "alpha-s",
  "alpha-t",
  "alpha-u",
  "alpha-v",
  "alpha-w",
  "alpha-x",
  "alpha-y",
  "alpha-z",
];

export const colors: PikminColor[] = [
  PikminColor.Red,
  PikminColor.Yellow,
  PikminColor.Blue,
  PikminColor.White,
  PikminColor.Purple,
  PikminColor.Grey,
  PikminColor.Pink,
];

export const imageSize = 24;

/**
 * Represents the next valid collection status index (statusEmojis) for each status index.
 *
 * @param {number} i collection status to change
 */
export const nextStatusMap: Record<DecorStatus, DecorStatus> = {
  [DecorStatus.Uncollected]: DecorStatus.Seedling, // ❌➡🌿
  [DecorStatus.Seedling]: DecorStatus.Growing, // 🌿➡🥚
  [DecorStatus.Growing]: DecorStatus.Collected, // 🥚➡✅
  [DecorStatus.Collected]: DecorStatus.Uncollected, // ✅➡❌
};

/**
 * Emojis for each status index.
 * For backwards compatibility with the storage & encoding mechanism, the order cannot change across versions,
 * which is why they are not in a logical order.
 */
export const statusEmojis = ["❌", "✅", "🥚", "🌿"];
