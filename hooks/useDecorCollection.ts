import React, { useState } from "react";
import { nextStatusMap } from "../utils/constants";
import { decodeCollection } from "../utils/encoding";
import { DecorCollection, DecorStatus } from "../utils/types";

const storageKey = "decorCollection";

export const useDecorCollection = () => {
  const [collection, setCollection] = useState<DecorCollection>({});

  const setCollectionWithStorage = (newCollection: DecorCollection) => {
    setCollection(newCollection);
    localStorage.setItem(storageKey, JSON.stringify(newCollection));
  };

  // Get initial collection status from storage on page load
  React.useEffect(() => {
    const urlCollection = new URL(window.location.href).searchParams.get(
      "collection",
    );
    const storageCollection = localStorage.getItem(storageKey);
    if (
      urlCollection &&
      confirm(
        "There was a collection in the URL. Do you want to import & override your current collection? This cannot be undone.",
      )
    ) {
      try {
        const decoded = decodeCollection(urlCollection);
        setCollectionWithStorage(decoded);
      } catch (e) {
        alert("Could not import collection from URL.\n" + e.message);
      }
      window.history.pushState({}, null, "/");
    } else if (storageCollection) {
      setCollection(JSON.parse(storageCollection));
    }
  }, []);

  const get = (key: string) => collection[key] ?? 0;

  const set = (key: string, status: DecorStatus) => {
    const newCollection = { ...collection };
    if (status > 0) {
      newCollection[key] = status;
    } else {
      delete newCollection[key];
    }

    setCollectionWithStorage(newCollection);
  };

  const clear = () => setCollectionWithStorage({});

  return { collection, get, set, clear };
};

export const cycleStatus = (i: DecorStatus): DecorStatus =>
  nextStatusMap[i] ?? DecorStatus.Uncollected;
