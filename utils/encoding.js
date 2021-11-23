/*
 * Provides encoding and decoding so we don't have to pass a very long string in the URL by encoding a full JSON object.
 *
 * The collection is represented as a byte array and base64-encoded into the URL.
 * We only store the items that are non-zero.
 *
 * The encoding is as follows: [HEADER: 1 byte, <ENTRY: DECOR, (COLOR, STATUS)>...]
 * * HEADER is a future-proofing safeguard, for now we'll always store 0 as this is the first version.
 * * ENTRIES is made up of 2 bytes:
 *   * DECOR takes a full byte
 *   * STATUS has the 5 most significant bits for the COLOR and 3 less significant bits for the STATUS.
 *
 * This is then encoded as base64 so it can be transferred over a URL.
 */

import { colors, colorsLookupMap, decors, decorsLookupMap } from "./constants";
import { getDecorKey, parseDecorKey } from "./strings";

export const getShareURL = (collection) => {
  const encoded = encodeCollection(collection);
  const url = new URL(window.location.href);
  url.searchParams.set("collection", encoded);

  return url.toString();
};

const encodeCollection = (collection) => {
  const items = Object.entries(collection);

  const byteArray = new Uint8Array(1 + items.length * 2);

  for (let i = 1; i < byteArray.length; i += 2) {
    const [key, status] = items.pop();
    const { decor, color } = parseDecorKey(key);

    const decorIndex = decorsLookupMap[decor];
    const colorIndex = colorsLookupMap[color];

    byteArray[i] = decorIndex;
    byteArray[i + 1] = (colorIndex << 3) | status;
  }

  return btoa(byteArray);
};

export const decodeCollection = (encoded) => {
  const byteArray = atob(encoded).split(",").map(Number);
  const collection = {};

  for (let i = 1; i < byteArray.length; i += 2) {
    const decorIndex = byteArray[i];
    const colorIndex = byteArray[i + 1] >> 3;
    const status = 0b00000111 & byteArray[i + 1];

    collection[getDecorKey(decors[decorIndex], colors[colorIndex])] = status;
  }

  return collection;
};
