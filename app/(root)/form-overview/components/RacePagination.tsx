import { PropsWithChildren } from "react";
import styles from "./RacePagination.module.scss";
import { cn } from "@/lib/utils";

type RacePaginationProps = {
  active?: boolean;
  className?: string;
};

export const RacePagination = ({
  className,
  active = false,
  ...props
}: PropsWithChildren<RacePaginationProps>) => {
  return (
    <div
      {...props}
      className={cn(styles.pagination, active && styles.active, className)}
    />
  );
};
