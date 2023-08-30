# pikmin-bloom-checklist

A checklist to help you keep track of which type of Decor Pikmin you have collected in the Pikmin Bloom game.

Published on [pikmin-bloom-checklist.notuom.com](https://pikmin-bloom-checklist.notuom.com/).

## Local Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [GitHub Pages](https://pages.github.com/).

Developed & tested with Node 16 LTS.

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Contributing

Contributions are welcome!

## Adding Decors

The most common type of update is adding missing decors. Here are the steps required:

1. Find a suitable icon for the decor. Usually, a 24px transparent square png in black or an outline works well.
2. Usually, free icons online come with an attribution license. Copy the attribution link into your clipboard.
3. Download the image from the icon website; copy it to the `/public/decors` folder. Its filename should match the existing naming patterns.
3. Edit `src/utils/constants.ts`. Change the `decors` array. The order is important; ensure the logical order is respected (regular -> special -> exhaustive). See existing decors for plentiful examples. The `key` should match the filename of the downloaded icon.
4. In the same file, change the `attributions` array. Add the `link`, `text`, and `title` required by the site you downloaded the icon from.
5. Run the app locally using `npm run dev`; validate it works as expected.

## New Features

For new features, please create an issue to discuss the feature and the suggested approach first. Once the general idea and design is approved, you can create a pull request.
