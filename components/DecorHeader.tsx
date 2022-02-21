import * as React from "react";
import Image from "next/image";

import { imageSize } from "../utils/constants";
import { decorLoader, getDecorIcon } from "../utils/strings";
import { Decor, DecorType } from "../utils/types";

export interface DecorHeaderProps {
  decor: Decor;
}

export const DecorHeader: React.FC<DecorHeaderProps> = ({ decor }) => {
  if (decor.type === DecorType.Roadside) {
    return (
      <>
        <span title={decor.title} className="sticker">
          {decor.key.replace("alpha-", "").toUpperCase()}
        </span>
      </>
    );
  }

  return (
    <Image
      loader={decorLoader}
      alt={decor.title}
      title={decor.title}
      src={getDecorIcon(decor.key)}
      width={imageSize}
      height={imageSize}
    />
  );
};
