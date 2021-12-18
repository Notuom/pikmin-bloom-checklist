import Image from "next/image";
import { imageSize } from "../utils/constants";
import {
  capitalizeDecorTitle,
  decorLoader,
  getDecorIcon,
} from "../utils/strings";

export const DecorHeader = ({ decor }) => {
  const title = capitalizeDecorTitle(decor);
  const isAlpha = decor.startsWith("alpha-");
  const letter = isAlpha && decor.replace("alpha-", "").toUpperCase();

  return isAlpha ? (
    <>
      <span
        title={`Roaside Decor Pikmin with sticker: ${letter}`}
        className="sticker"
      >
        {letter}
      </span>
    </>
  ) : (
    <Image
      loader={decorLoader}
      alt={title}
      title={`Decor Pikmin for: ${title}`}
      src={getDecorIcon(decor)}
      width={imageSize}
      height={imageSize}
    />
  );
};
