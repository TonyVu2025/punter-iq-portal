"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-expect-error You know why it's here.
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <div className="invisible md:visible">
        <ReactQueryDevtools initialIsOpen={false} />

        {showDevtools && (
          <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </Suspense>
        )}
      </div>
    </QueryClientProvider>
  );
};
