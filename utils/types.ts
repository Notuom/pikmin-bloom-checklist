export enum PikminColor {
  Red = "red",
  Yellow = "yellow",
  Blue = "blue",
  White = "white",
  Purple = "purple",
  Grey = "grey",
  Pink = "pink",
}

export enum RoadsideStickerColor {
  Green = "green",
  Blue = "blue",
  Orange = "orange",
}

export enum DecorStatus {
  Uncollected = 0,
  Collected = 1,
  Growing = 2,
  Seedling = 3,
}

export type DecorCollection = Record<string, number>;

export type LookupMap = Record<string, number>;

export interface DecorColorPair {
  decor: string;
  color: string;
}

export enum CollectionView {
  Simple = 0,
  Advanced = 1,
  Exhaustive = 2,
}

export enum DecorType {
  Location = 0,
  Special = 1,
  Roadside = 2,
}

export interface Decor {
  // Unique key for storage and identification purposes
  key: string;
  // Type of Decor which controls how the header row is rendered
  type: DecorType;
  // Title to be displayed in a tooltip
  title: string;
  // Optional description to be displayed in a tooltip
  description?: string;
  // Which colors this decor is available for
  colors: PikminColor[];
  // Which view displays this decor
  views: CollectionView[];
  // Only for "Roadside" decor: the sticker color
  roadsideColor?: RoadsideStickerColor;
}
