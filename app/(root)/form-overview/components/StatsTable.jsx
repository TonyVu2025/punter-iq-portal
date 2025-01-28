import { BIcon } from "@/components/ui/icons/BIcon";
import styles from "./StatsTable.module.css";

export const StatsTable = () => {
  return (
    <table className={styles.statsTable}>
      <thead>
        <tr className="text-Font_SubColor_1">
          <th></th>
          <th>SP</th>
          <th>STAB</th>
          <th>NSWTAB</th>
          <th>UBET</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>W</td>
          <td>6.5</td>
          <td>-</td>
          <td>-</td>
          <td>8.3</td>
          <td rowSpan={2}>
            <div className="inline-block rounded bg-mainFont px-2.5 py-3 text-white">
              <BIcon className="w-[14px] lg:w-[unset]" />
            </div>
          </td>
        </tr>

        <tr>
          <td>P</td>
          <td>7</td>
          <td>3</td>
          <td>5</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  );
};
