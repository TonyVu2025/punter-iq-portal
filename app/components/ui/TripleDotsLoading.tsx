import { cn } from "@/lib/utils";
import styles from "./TripleDotsLoading.module.css";
import { HTMLAttributes } from "react";

export const TripleDotsLoading = ({
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(styles.loader11, className)}>
      <span></span>
    </div>
  );
};
