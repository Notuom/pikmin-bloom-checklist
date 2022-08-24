import { capitalizeDecorTitle } from "./strings";
import {
  CollectionView,
  Decor,
  DecorStatus,
  DecorType,
  PikminColor,
  RoadsideStickerColor,
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

/**
 * Characters that can appear on a roadside Pikmin sticker.
 * 36 individual characters
 */
const stickerValues = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

const allCollectionViews = [
  CollectionView.Simple,
  CollectionView.Advanced,
  CollectionView.Exhaustive,
];

/**
 * Valid colors for roadside Pikmin stickers used in exhaustive views. Corresponds to a CSS class used for styling the sticker.
 */
const roadsideStickerColors: RoadsideStickerColor[] = [
  RoadsideStickerColor.Green,
  RoadsideStickerColor.Blue,
  RoadsideStickerColor.Orange,
];

/**
 * Title helper for the basic decor case.
 */
const decorTitle = (text: string) => `Decor Pikmin for: ${text}`;

/**
 * Location decors are decors based on where the Pikmin was found.
 */
const createLocationDecor = (
  key: string,
  overrides?: Partial<Decor>
): Decor => ({
  key,
  type: DecorType.Location,
  title: overrides?.title ?? decorTitle(capitalizeDecorTitle(key)),
  description: overrides?.description,
  colors: overrides?.colors ?? colors,
  views: overrides?.views ?? allCollectionViews,
});

/**
 * Alphanumeric roadside stickers shown in the Advanced view.
 * Generates 36 entries
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
 * Alphanumeric roadside stickers tracking individual colors; shown in the Exhaustive view.
 * Generates 108 entries
 */
const createRoadsideColorDecors = (): Decor[] =>
  stickerValues.flatMap<Decor>((character) =>
    roadsideStickerColors.map((roadsideColor) => ({
      key: `alpha-${character}-${roadsideColor}`,
      type: DecorType.Roadside,
      title: `Roadside Decor Pikmin with ${roadsideColor} sticker: ${character.toUpperCase()}`,
      colors,
      views: [CollectionView.Exhaustive],
      roadsideColor,
    }))
  );

/**
 * All the decors that can be obtained. Roadside decor are duplicated,
 * due to the different views containing the same decor in different sticker colors.
 *
 * Notes due to encoding restrictions:
 * - If the order of the entries changes, we need to change SCHEMA_VERSION to indicate breaking encoding changes.
 * - This is currently limited to 256 entries max due to it being represented in a single byte. (this could also be changed with a breaking schema change)
 * @see ./encoding.ts
 *
 * Current decors count: 174
 */
export const decors: Decor[] = [
  // All regular location decors
  createLocationDecor("restaurant"),
  {
    key: "restaurant-shiny",
    colors: [PikminColor.Blue, PikminColor.Yellow, PikminColor.Red],
    title: decorTitle("Restaurant (Shiny)"),
    description:
      "Rare shiny variation for the Restaurant decor",
    type: DecorType.Special,
    views: [CollectionView.Advanced, CollectionView.Exhaustive],
  },
  createLocationDecor("cafe"),
  createLocationDecor("sweetshop"),
  createLocationDecor("movie-theater"),
  createLocationDecor("pharmacy"),
  createLocationDecor("zoo"),
  createLocationDecor("forest-1", { title: decorTitle("Forest (Stag Beetle)") }),
  createLocationDecor("forest-2", { title: decorTitle("Forest (Acorn)") }),
  createLocationDecor("waterside"),
  createLocationDecor("post-office"),
  createLocationDecor("art-gallery"),
  createLocationDecor("airport"),
  createLocationDecor("station", { title: decorTitle("Train station (Paper train)")}),
  createLocationDecor("station-2", { title: decorTitle("Train station (Ticket)")}),
  createLocationDecor("beach"),
  createLocationDecor("hamburger-shop"),
  createLocationDecor("mini-mart", { title: decorTitle("Corner Store (Bottle Cap)") }),
  createLocationDecor("mini-mart-2", { title: decorTitle("Corner Store (Snack)") }),
  createLocationDecor("supermarket-1", { title: decorTitle("Supermarket (Mushroom)") }),
  createLocationDecor("supermarket-2", { title: decorTitle("Supermarket (Banana)") }),
  createLocationDecor("bakery"),
  createLocationDecor("hair-salon"),
  createLocationDecor("clothing-store"),
  createLocationDecor("park", { title: decorTitle("Park (Clover)") }),
  createLocationDecor("park-four-leaf-clover", {
    title: decorTitle("Park (Four-Leaf Clover)"),
    description:
      "This Decor is an extremely rare variation of the regular Clover decor, which shows up more often on St. Patrick's day in Special Event Huge Seedlings.",
  }),
  createLocationDecor("library"),
  createLocationDecor("roadside"),
  createLocationDecor("sushi", { colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue]}),
  createLocationDecor("mountain", { colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue]}),
  createLocationDecor("weather-1", { colors: [PikminColor.Blue]}),
  createLocationDecor("weather-2", { colors: [PikminColor.Blue]}),
  createLocationDecor("weather-3", { colors: [PikminColor.Blue]}),
  createLocationDecor("themepark-1", { title: decorTitle("Theme Park"), colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue]}),
  createLocationDecor("themepark-2", { title: decorTitle("Theme Park (alternative design)"), colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue], views: [CollectionView.Advanced, CollectionView.Exhaustive]}),

  // Special Decor Pikmin which are custom in every aspect.
  {
    key: "special-mario",
    colors: [PikminColor.Blue],
    title: "Mario",
    description:
      "This Decor Pikmin wears a replica of Mario's signature red cap. A Huge Seedling for this Pikmin can be obtained when the player links their Nintendo Account to the app.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-lunar-new-year",
    colors: [PikminColor.Blue, PikminColor.Yellow, PikminColor.Red],
    title: "Lunar New Year",
    description:
      "On February 1st, 2022, to coincide with the Lunar New Year event, a new type of special Decor Pikmin was made obtainable for a limited time. These Decor Pikmin wear red decorations with gold patterns.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-chess",
    colors: [PikminColor.Yellow, PikminColor.Blue, PikminColor.White, PikminColor.Purple],
    title: "Chess Piece",
    description:
      "To celebrate the International Chess Day on July 20th, a special Decor Pikmin was made obtainable from July 18th until July 31st, 2022. They will be available in the future again.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-holiday-stickers",
    colors,
    title: "Holiday Sticker",
    description:
      "Any Roadside-type Pikmin grown from a seedling that was discovered between December 21st, 2021 to January 11th, 2022 will instead have a Holidays-themed sticker. These stickers are bigger than the regular sticker, with each Pikmin type having a different design.",
    type: DecorType.Special,
    views: [CollectionView.Advanced, CollectionView.Exhaustive],
  },

  // Roadside decors for display in Advanced view only
  ...createRoadsideDecors(),

  // Detailed Roadside decors for display in Exhaustive view only
  ...createRoadsideColorDecors(),
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
