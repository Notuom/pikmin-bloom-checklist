export enum PikminColor {
  Red = "red",
  Yellow = "yellow",
  Blue = "blue",
  White = "white",
  Purple = "purple",
  Grey = "grey",
  Pink = "pink",
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