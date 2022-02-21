import * as React from "react";

import { cycleStatus, useDecorCollection } from "../hooks/useDecorCollection";
import styles from "../styles/Checklist.module.css";
import { colors, decors, statusEmojis } from "../utils/constants";
import { getDecorKey } from "../utils/strings";
import { DecorHeader } from "./DecorHeader";
import { Toolbar } from "./Toolbar";

export const Checklist: React.FC = () => {
  const { collection, get, set, clear } = useDecorCollection();

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
          {decors.map((decor) => (
            <tr key={decor.key}>
              <th>
                <DecorHeader decor={decor} />
              </th>
              {colors.map((color) => {
                const key = getDecorKey(decor.key, color);
                const status = get(key);

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
          ))}
        </tbody>
      </table>
      <Toolbar clear={clear} collection={collection} />
    </>
  );
};
