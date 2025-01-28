import { cn } from "@/lib/utils";

export const BetCardWithRows = ({
  headerLeftText,
  headerRightText,
  headerClassName,
  tableClassName,
  rows = [],
  theads = [],
}) => {
  return (
    <div className="rounded-lg bg-white">
      <div
        className={cn(
          "lg:app-text-h4 flex items-center justify-between rounded-t-lg bg-gradient-blue-main p-3 font-helveticaNowDisplay text-white lg:px-7 lg:py-6",
          headerClassName,
        )}
      >
        <div className="font-extrabold">{headerLeftText}</div>
        <div className="text-right font-extrabold lg:text-left">
          {headerRightText}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className={cn("w-full table-fixed", tableClassName)}>
          {theads.length ? (
            <thead>
              <tr>{theads}</tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((cells, index) => (
              <tr key={index} className="border-t">
                {cells}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
