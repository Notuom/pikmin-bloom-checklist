import * as React from "react";

import { CollectionView } from "../utils/types";
import { PropsWithChildren } from "react";

export interface ViewContextValue {
  view: CollectionView;
  setView: (view: CollectionView) => void;
}

export const ViewContext = React.createContext<ViewContextValue>({
  view: CollectionView.Simple,
  setView: () => {},
});

export const useViewContext = () => React.useContext(ViewContext);

const storageKey = "decorView";

export const ViewContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [view, setInternalView] = React.useState<CollectionView>(
    CollectionView.Advanced,
  );
  React.useEffect(() => {
    const storedView = localStorage.getItem(storageKey) as CollectionView;
    if (storedView) {
      setInternalView(storedView);
    }
  }, [setInternalView]);
  const setView = React.useCallback(
    (updatedView: CollectionView) => {
      setInternalView(updatedView);
      localStorage.setItem(storageKey, updatedView);
    },
    [setInternalView],
  );
  const context = { view, setView };

  return (
    <ViewContext.Provider value={context}>{children}</ViewContext.Provider>
  );
};
