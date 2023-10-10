import { capitalizeDecorTitle } from "./strings";
import {
  Attribution,
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
  overrides?: Partial<Decor>,
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
    })),
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
    description: "Rare shiny variation for the Restaurant decor",
    type: DecorType.Special,
    views: [CollectionView.Advanced, CollectionView.Exhaustive],
  },
  createLocationDecor("cafe"),
  createLocationDecor("sweetshop", {
    title: decorTitle("Sweetshop (Macaron)"),
  }),
  createLocationDecor("sweetshop-2", {
    title: decorTitle("Sweetshop (Donut)"),
  }),
  createLocationDecor("movie-theater"),
  createLocationDecor("pharmacy"),
  createLocationDecor("zoo"),
  createLocationDecor("forest-1", {
    title: decorTitle("Forest (Stag Beetle)"),
  }),
  createLocationDecor("forest-2", { title: decorTitle("Forest (Acorn)") }),
  createLocationDecor("waterside"),
  createLocationDecor("post-office"),
  createLocationDecor("art-gallery"),
  createLocationDecor("airport"),
  createLocationDecor("station", {
    title: decorTitle("Train station (Paper train)"),
  }),
  createLocationDecor("station-2", {
    title: decorTitle("Train station (Ticket)"),
  }),
  createLocationDecor("beach"),
  createLocationDecor("hamburger-shop"),
  createLocationDecor("mini-mart", {
    title: decorTitle("Corner Store (Bottle Cap)"),
  }),
  createLocationDecor("mini-mart-2", {
    title: decorTitle("Corner Store (Snack)"),
  }),
  createLocationDecor("supermarket-1", {
    title: decorTitle("Supermarket (Mushroom)"),
  }),
  createLocationDecor("supermarket-2", {
    title: decorTitle("Supermarket (Banana)"),
  }),
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
  createLocationDecor("sushi"),
  createLocationDecor("mountain", {
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
  }),
  createLocationDecor("stadium", {
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
  }),
  createLocationDecor("weather-1", { colors: [PikminColor.Blue] }),
  createLocationDecor("weather-2", { colors: [PikminColor.Blue] }),
  createLocationDecor("weather-3", { colors: [PikminColor.Blue] }),
  createLocationDecor("themepark-1", {
    title: decorTitle("Theme Park"),
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
  }),
  createLocationDecor("themepark-2", {
    title: decorTitle("Theme Park (alternative design)"),
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
    views: [CollectionView.Advanced, CollectionView.Exhaustive],
  }),
  createLocationDecor("bus-stop"),
  createLocationDecor("italian-restaurant"),
  createLocationDecor("ramen-restaurant", {
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
  }),
  createLocationDecor("bridge", {
    colors: [PikminColor.Red, PikminColor.Yellow, PikminColor.Blue],
  }),
  createLocationDecor("hotel"),
  createLocationDecor("makeup"),

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
      "On February 1st, 2022, and again in 2023, to coincide with the Lunar New Year event, a new type of special Decor Pikmin was made obtainable for a limited time. These Decor Pikmin wear red decorations with gold patterns.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-lunar-new-year-2023",
    colors: [PikminColor.Blue, PikminColor.Yellow, PikminColor.Red],
    title: "Lunar New Year 2023",
    description:
      "On January 21st, 2023, to coincide with the Lunar New Year event, a new type of special Decor Pikmin was made obtainable for a limited time. These Decor Pikmin wear gold decorations with red patterns.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-chess",
    colors,
    title: "Chess Piece (Black)",
    description:
      "To celebrate the International Chess Day on July 20th, a special Decor Pikmin was made obtainable from July 18th until July 31st, 2022. They will be available in the future again.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-chess-white",
    colors,
    title: "Chess Piece (White)",
    description:
      "Chess Day 2023. In this event, the time when you collect the gold seedlings influences the chess piece color your Pikmin will wear. Colors rotate weekly.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-fingerboard",
    colors,
    title: "Fingerboard",
    description:
      "A special Decor Pikmin made obtainable for two weeks from August 15th 2022.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-flower-card",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-flower-card-2",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Design #2. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: [CollectionView.Exhaustive],
  },
  {
    key: "special-flower-card-3",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Design #3. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: [CollectionView.Exhaustive],
  },
  {
    key: "special-flower-card-4",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Design #4. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: [CollectionView.Exhaustive],
  },
  {
    key: "special-flower-card-5",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Design #5. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: [CollectionView.Exhaustive],
  },
  {
    key: "special-flower-card-6",
    icon: "special-flower-card",
    colors: [
      PikminColor.Red,
      PikminColor.Yellow,
      PikminColor.Blue,
      PikminColor.Purple,
    ],
    title: "Flower card",
    description:
      "Design #6. Available in September 2022 and again in September 2023. 6 different Flower Card designs per Pikmin.",
    type: DecorType.Special,
    views: [CollectionView.Exhaustive],
  },
  {
    key: "special-halloween",
    colors,
    title: "Jack-o'-lantern",
    description: "Special Decor Pikmin for the 2022 Halloween event.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-anniversary-snack",
    colors,
    title: "First Anniversary Snack",
    description:
      "On November 1st, 2022, for the first anniversary, a new type of special Decor Pikmin was made obtainable for 2 weeks.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-mitten",
    colors: [PikminColor.Blue, PikminColor.Yellow, PikminColor.Red],
    title: "Mitten",
    description:
      "From December 12th to December 31st, 2022, a new type of Decor Pikmin was obtainable for an event. These Decor Pikmin wear small mittens on their heads.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-space-suit",
    colors: [PikminColor.Blue, PikminColor.Yellow, PikminColor.Red],
    title: "Koppaite Space Suit",
    description:
      "From November 28th to December 9th, 2022, there was an event themed around Pikmin 3 Deluxe, where 3 types of Decor Pikmin could be obtained by completing flower planting missions.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-2023-glasses",
    colors,
    title: "2023 glasses",
    description:
      "From December 26th, 2022 to January 15th, 2023, for the 2023 New Year event, a new type of Decor Pikmin was obtainable for 3 weeks. These Decor Pikmin wear appropriately sized New Year's glasses on their heads.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-present-sticker",
    colors,
    title: "Present Sticker",
    description:
      "February 6th 2023 to February 26th 2023. For Valentine's Day 2023, a new type of Decor Pikmin was obtainable for 3 weeks. These decor Pikmin wear pink oversized 'present' stickers.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-easter-egg",
    colors,
    title: "Easter Egg",
    description:
      "April 1st 2023 to April 30th 2023. For the Easter event, a new set of Decor Pikmin were obtainable. Those Decor Pikmin wore colored egg shells in celebration of Easter.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-sneakers",
    colors,
    title: "Sneaker Keychain",
    description:
      "May 8th 2023 to May 31st 2023. Gold seedlings from event challenges and referral codes reward players with Sneaker Keychain decor Pikmin.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-spaceship",
    colors,
    title: "Pikmin 4 Spaceships",
    description: "Pikmin 4 Spaceships",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-mahjong",
    colors,
    title: "Mahjong (1st variant)",
    description:
      "August 14th 2023 to September 10th 2023. Complete Event Challenge missions to obtain gold seedlings for Mahjong Tile Decor Pikmin.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-mahjong-2",
    colors,
    title: "Mahjong (2nd variant)",
    description:
      "August 14th 2023 to September 10th 2023. Complete Event Challenge missions to obtain gold seedlings for Mahjong Tile Decor Pikmin.",
    type: DecorType.Special,
    views: allCollectionViews,
  },
  {
    key: "special-ice-cream",
    colors,
    title: "Ice Cream",
    description:
      "September 11th to September 30th 2023. Complete Event Challenge missions to obtain gold seedlings.",
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
  {
    key: "special-roadside-coin",
    colors,
    title: "Roadside Coin",
    description:
      "These Pikmin only have 1 type per Pikmin, unlike the sticker type, and the coins present on the Pikmin are from all around the world.",
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

/**
 * List of attributions to render in the About page for icons downloaded under license requiring attribution.
 */
export const attributions: Attribution[] = [
  //
  {
    link: "https://thenounproject.com/icon/checklist-5020438/",
    text: "Checklist by Mada Creative from NounProject.com",
  },
  {
    link: "https://thenounproject.com/icon/flower-5021607/",
    text: "Flower by Ria Fitriana from NounProject.com",
  },
  {
    link: "https://thenounproject.com/term/beetle/396855/",
    text: "Beetle by Erik Jensen from the Noun Project",
  },
  {
    link: "https://thenounproject.com/term/banana/2770445/",
    text: "banana by Izwar Muis from the Noun Project",
  },
  {
    link: "https://thenounproject.com/term/mushroom/3194002/",
    text: "Mushroom by Adrien Coquet from the Noun Project",
  },
  {
    link: "https://thenounproject.com/term/acorn/4408016/",
    text: "Acorn by KP Arts from the Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/chess-piece-2375089/",
    text: "Chess Piece by Vectors Point from NounProject.com",
  },
  {
    link: "https://thenounproject.com/icon/skateboard-1293915/",
    text: "Skateboard by Orin zuu from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/pumpkin-700084/",
    text: "pumpkin by Yeong Rong Kim from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/june-of-hwatu-1629155/",
    text: "june of hwatu by 1516 from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/candy-4080734/",
    text: "candy by alfian dwi hartanto from Noun Project",
  },
  {
    link: "https://www.flaticon.com/free-icon/2023-2025_9243079",
    text: "2023 icons created by muhammad atho from Flaticon",
  },
  {
    link: "https://thenounproject.com/icon/envelope-5393196/",
    text: "envelope by Icon Market from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/envelope-5395044/",
    text: "envelope (inverted) by Icon Market from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/space-suit-1652614/",
    text: "space suit by Maxim Kulikov from Noun Project",
  },
  {
    link: "https://thenounproject.com/icon/mitten-2099950/",
    text: "mitten by Ninejipjip from Noun Project",
  },
  {
    link: "https://www.flaticon.com/free-icons/easter",
    text: "Easter icons created by Freepik - Flaticon",
    title: "easter icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/stadium",
    text: "Stadium icons created by Freepik - Flaticon",
    title: "stadium icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/money",
    text: "Money icons created by Freepik - Flaticon",
    title: "money icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/ramen",
    text: "Ramen icons created by Tanah Basah - Flaticon",
    title: "ramen icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/sneaker",
    text: "Sneaker icons created by Freepik - Flaticon",
    title: "sneaker icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/donut",
    text: "Donut icons created by Freepik - Flaticon",
    title: "donut icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/ufo",
    text: "Ufo icons created by Freepik - Flaticon",
    title: "ufo icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/bridge",
    text: "Bridge icons created by Bartama Graphic - Flaticon",
    title: "bridge icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/hotel",
    text: "Hotel icons created by Those Icons - Flaticon",
    title: "hotel icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/chess",
    text: "Chess icons created by SBTS2018 - Flaticon",
    title: "chess icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/mahjong",
    text: "Mahjong icons created by Freepik - Flaticon",
    title: "mahjong icons",
  },
  {
    link: "https://www.flaticon.com/free-icons/ice-cream",
    text: "Ice cream icons created by Freepik - Flaticon",
    title: "ice cream icons",
  },
];
