import * as React from "react";
import Image from "next/image";

import { imageSize } from "../utils/constants";
import { decorLoader, getDecorIcon } from "../utils/strings";
import { Decor, DecorType } from "../utils/types";

export interface DecorHeaderProps {
  decor: Decor;
}

export const DecorHeader: React.FC<DecorHeaderProps> = ({ decor }) => {
  const description = decor.description ? `: ${decor.description}` : "";
  const tooltip = `${decor.title}${description}`;

  if (decor.type === DecorType.Roadside) {
    return (
      <>
        <span
          data-tip={tooltip}
          className={`sticker ${decor.roadsideColor ?? ""}`}
        >
          {decor.key.split("-")[1].toUpperCase()}
        </span>
      </>
    );
  }

  return (
    <Image
      loader={decorLoader}
      alt={decor.title}
      data-tooltip-id="decor-title-tooltip"
      data-tooltip-content={tooltip}
      src={getDecorIcon(decor.icon ?? decor.key)}
      width={imageSize}
      height={imageSize}
    />
  );
};
