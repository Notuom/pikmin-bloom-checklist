import * as React from "react";
import ReactTooltip from "react-tooltip";

import { useViewContext } from "../context/ViewContext";
import { cycleStatus, useDecorCollection } from "../hooks/useDecorCollection";
import { colors, decors, statusEmojis } from "../utils/constants";
import { getDecorKey } from "../utils/strings";
import { DecorHeader } from "./DecorHeader";
import { Toolbar } from "./Toolbar";
import { TopToolbar } from "./TopToolbar";

import styles from "../styles/Checklist.module.css";

export const Checklist: React.FC = () => {
  const { collection, get, set, clear } = useDecorCollection();
  const { view } = useViewContext();

  React.useEffect(() => {
    // ReactTooltip needs to be told when tooltipped elements on the page change.
    ReactTooltip.rebuild();
  }, [view]);

  return (
    <>
      <TopToolbar />
      <ReactTooltip
        place="right"
        effect="solid"
        backgroundColor="black"
        textColor="white"
      />
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
          {decors.map(
            (decor) =>
              decor.views.includes(view) && (
                <tr key={decor.key}>
                  <th>
                    <DecorHeader decor={decor} />
                  </th>
                  {colors.map((color) => {
                    const key = getDecorKey(decor.key, color);
                    const status = get(key);

                    if (!decor.colors.includes(color)) {
                      return <td key={key} className={styles.invalid} />;
                    }

                    return (
                      <td
                        key={key}
                        className={styles.status}
                        onClick={() => set(key, cycleStatus(status))}
                      >
                        {statusEmojis[status]}
                      </td>
                    );
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>
      <Toolbar clear={clear} collection={collection} />
    </>
  );
};
