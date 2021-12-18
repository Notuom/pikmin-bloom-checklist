import Image from "next/image";
import {
  nextValidStatus,
  useDecorCollection
} from "../hooks/useDecorCollection";
import styles from "../styles/Checklist.module.css";
import { colors, decors, imageSize, statusEmojis } from "../utils/constants";
import {
  capitalizeDecorTitle,
  decorLoader,
  getDecorIcon,
  getDecorKey
} from "../utils/strings";
import { Toolbar } from "./Toolbar";

export const Checklist = () => {
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
      <Toolbar collection={collection} />
    </>
  );
};
