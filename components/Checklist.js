import Image from "next/image";
import { useRef, useState } from "react";
import {
  nextValidStatus,
  useDecorCollection,
} from "../hooks/useDecorCollection";
import styles from "../styles/Checklist.module.css";
import { colors, decors, imageSize, statusEmojis } from "../utils/constants";
import { getShareURL } from "../utils/encoding";
import {
  capitalizeDecorTitle,
  decorLoader,
  getDecorIcon,
  getDecorKey,
} from "../utils/strings";

export const Checklist = () => {
  const [sharedCollectionUrl, setSharedCollectionUrl] = useState("");
  const [clipboardOutput, setClipboardOutput] = useState("");
  const sharedCollectionInputRef = useRef();

  const { collection, get, set, clear } = useDecorCollection();
  const confirmClear = () =>
    confirm(
      "Are you sure you want to proceed with permanently deleting your progress?"
    ) && clear();

  const share = (collection) => {
    const url = getShareURL(collection);
    setSharedCollectionUrl(url);
    sharedCollectionInputRef.current?.focus();
    sharedCollectionInputRef.current?.select();

    navigator.clipboard
      .writeText(url)
      .then(() => setClipboardOutput("Share URL copied to clipboard!"))
      .catch(() =>
        setClipboardOutput(
          "Could not access clipboard. Please try again or copy the URL from the text input above."
        )
      );
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {colors.map((color) => (
              <th key={color} className={styles[color]} title={color} />
            ))}
          </tr>
        </thead>
        <tbody>
          {decors.map((decor) => {
            const title = capitalizeDecorTitle(decor);

            return (
              <tr key={decor}>
                <th>
                  <Image
                    loader={decorLoader}
                    alt={title}
                    title={title}
                    src={getDecorIcon(decor)}
                    width={imageSize}
                    height={imageSize}
                  />
                </th>
                {colors.map((color) => {
                  const key = getDecorKey(decor, color);
                  const status = get(key);

                  return (
                    <td
                      key={key}
                      className={styles.status}
                      onClick={() => set(key, nextValidStatus(status + 1))}
                    >
                      {statusEmojis[status]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className={styles.button} type="button" onClick={confirmClear}>
          Clear
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => share(collection)}
        >
          Share
        </button>
        <input
          type="text"
          value={sharedCollectionUrl}
          readOnly
          ref={sharedCollectionInputRef}
        />
      </div>
      {clipboardOutput && <p>{clipboardOutput}</p>}
    </>
  );
};
