import type { ImageLoader } from "next/image";

import { DecorColorPair } from "./types";

/**
 * Gets a well formatted title from a decor key
 * @param decorKey hyphenated decor key, i.e. "movie-theater"
 * @returns well formatted title i.e. "Movie Theater"
 */
export const capitalizeDecorTitle = (decorKey: string): string =>
  decorKey
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

export const getDecorIcon = (decorKey: string): string => `${decorKey}.png`;

export const decorLoader: ImageLoader = ({ src }) => `/decors/${src}`;

export const getDecorKey = (decor: string, color: string): string =>
  `${decor}~${color}`;

export const parseDecorKey = (key: string): DecorColorPair => {
  const extracted = key.split("~");

  return { decor: extracted[0], color: extracted[1] };
};
