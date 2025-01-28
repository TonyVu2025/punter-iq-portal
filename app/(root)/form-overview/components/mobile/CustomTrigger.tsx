import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import styles from "./CustomTrigger.module.scss";

export const CustomTrigger = ({ className, ...props }: any) => (
  <TabsTrigger
    className={cn(
      styles.trigger,
      className,
    )}
    {...props}
  />
);
