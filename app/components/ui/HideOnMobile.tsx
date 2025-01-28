"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config";

export const HideOnMobile: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const size = useWindowSize();

  if (!size.width || size.width < parseFloat(resolveConfig(tailwindConfig).theme.screens.lg))
    return null;

  return children;
};
