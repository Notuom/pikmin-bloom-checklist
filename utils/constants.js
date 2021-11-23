export const decors = [
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
  "mini-mart",
  "supermarket-1",
  "supermarket-2",
  "bakery",
  "hair-salon",
  "clothing-store",
  "park",
  "roadside",
];

export const colors = [
  "red",
  "yellow",
  "blue",
  "white",
  "purple",
  "grey",
  "pink",
];

export const imageSize = 24;

export const statusEmojis = ["❌", "✅", "🥚"];

const createLookupMap = (arr) => {
  const lookup = {};

  for (let index = 0; index < arr.length; index++) {
    lookup[arr[index]] = index;
  }

  return lookup;
};

export const decorsLookupMap = createLookupMap(decors);

export const colorsLookupMap = createLookupMap(colors);
