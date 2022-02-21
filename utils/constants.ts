import { capitalizeDecorTitle } from "./strings";
import {
  CollectionView,
  Decor,
  DecorStatus,
  DecorType,
  PikminColor,
} from "./types";

/**
 * The different colors/types of Pikmin that exist in the game, for which decor can be collected.
 */
export const colors: PikminColor[] = [
  PikminColor.Red,
  PikminColor.Yellow,
  PikminColor.Blue,
  PikminColor.White,
  PikminColor.Purple,
  PikminColor.Grey,
  PikminColor.Pink,
];

const stickerValues = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

/**
 * Location decors are decors based on where the Pikmin was found.
 */
const createLocationDecor = (key: string): Decor => ({
  key,
  type: DecorType.Location,
  title: `Decor Pikmin for: ${capitalizeDecorTitle(key)}`,
  colors,
  views: [
    CollectionView.Simple,
    CollectionView.Advanced,
    CollectionView.Exhaustive,
  ],
});

/**
 * Alphabet roadside stickers shown in the advanced view
 */
const createRoadsideDecors = (): Decor[] =>
  stickerValues.map((character) => ({
    key: `alpha-${character}`,
    type: DecorType.Roadside,
    title: `Roadside Decor Pikmin with sticker: ${character.toUpperCase()}`,
    colors,
    views: [CollectionView.Advanced],
  }));

/**
 * All the decors that can be obtained. Roadside decor are duplicated,
 * due to the different views containing the same decor in different sticker colors.
 * 
 * Notes due to encoding restrictions:
 * - If the order of the entries changes, we need to change SCHEMA_VERSION to indicate breaking encoding changes.
 * - This is currently limited to 256 entries due to it being represented in a single byte.
 * @see ./encoding.ts
 */
export const decors: Decor[] = [
  createLocationDecor("restaurant"),
  createLocationDecor("cafe"),
  createLocationDecor("sweetshop"),
  createLocationDecor("movie-theater"),
  createLocationDecor("pharmacy"),
  createLocationDecor("zoo"),
  createLocationDecor("forest-1"),
  createLocationDecor("forest-2"),
  createLocationDecor("waterside"),
  createLocationDecor("post-office"),
  createLocationDecor("art-gallery"),
  createLocationDecor("airport"),
  createLocationDecor("station"),
  createLocationDecor("beach"),
  createLocationDecor("hamburger-shop"),
  createLocationDecor("mini-mart"),
  createLocationDecor("supermarket-1"),
  createLocationDecor("supermarket-2"),
  createLocationDecor("bakery"),
  createLocationDecor("hair-salon"),
  createLocationDecor("clothing-store"),
  createLocationDecor("park"),
  createLocationDecor("roadside"),
  ...createRoadsideDecors(),
];

/**
 * Size for icon decor icons (must be square)
 */
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
