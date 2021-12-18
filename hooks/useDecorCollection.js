import React, { useState } from "react";
import { nextStatusMap } from "../utils/constants";
import { decodeCollection } from "../utils/encoding";

const storageKey = "decorCollection";

export const useDecorCollection = () => {
  const [collection, setCollection] = useState({});

  const setCollectionWithStorage = (newCollection) => {
    setCollection(newCollection);
    localStorage.setItem(storageKey, JSON.stringify(newCollection));
  };

  // Get initial collection status from storage on page load
  React.useEffect(() => {
    const urlCollection = new URL(window.location.href).searchParams.get(
      "collection"
    );
    const storageCollection = localStorage.getItem(storageKey);
    if (
      urlCollection &&
      confirm(
        "There was a collection in the URL. Do you want to replace your current collection with that one? This can't be undone."
      )
    ) {
      setCollectionWithStorage(decodeCollection(urlCollection));
      window.history.pushState({}, null, "/");
    } else if (storageCollection) {
      setCollection(JSON.parse(storageCollection));
    }
  }, []);

  const get = (key) => collection[key] ?? 0;

  const set = (key, status) => {
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

export const cycleStatus = (i) => nextStatusMap[i] ?? 0;
