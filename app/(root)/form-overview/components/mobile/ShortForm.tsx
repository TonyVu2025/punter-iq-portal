import { cn } from "@/lib/utils";

export const ShortForm = () => {
  return (
    <div className="grid grid-cols-2 gap-2 px-2 pb-3">
      {new Array(12).fill(null).map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "flex justify-between space-x-2 rounded border border-good_Green bg-white px-2 py-1 text-good_Green",
            idx > 6 && "bg-Sub_Dark_color text-white",
          )}
        >
          <span>Track:</span>

          <span>0-0-0-0</span>
        </div>
      ))}
    </div>
  );
};
