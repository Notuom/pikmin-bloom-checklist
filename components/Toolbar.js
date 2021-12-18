import { useEffect, useRef, useState } from "react";
import styles from "../styles/Toolbar.module.css";
import { getShareURL } from "../utils/encoding";

export const Toolbar = ({ collection }) => {
  const [sharedCollectionUrl, setSharedCollectionUrl] = useState("");
  const [clipboardOutput, setClipboardOutput] = useState("");
  const sharedCollectionInputRef = useRef();

  useEffect(() => {
    sharedCollectionInputRef.current?.focus();
    sharedCollectionInputRef.current?.select();
  }, [sharedCollectionInputRef, sharedCollectionUrl, clipboardOutput]);

  const confirmClear = () =>
    confirm(
      "Are you sure you want to proceed with permanently deleting your progress?"
    ) && clear();

  const share = (collection) => {
    const url = getShareURL(collection);
    setSharedCollectionUrl(url);

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
      <div class={styles.toolbar}>
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
