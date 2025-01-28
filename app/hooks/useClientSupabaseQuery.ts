import { createClient } from "@/utils/supabase/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

// Define a generic type for the hook based on the document's structure
export function useClientSupabaseQuery<
  T,
  Variables extends Record<string, any> = Record<string, any>,
>(
  queryKey: string[],
  document: TypedDocumentNode<T, Variables>,
  variables: Variables,
  queryOptions?: Omit<
    Parameters<typeof useQuery<T>>[0],
    "queryFn" | "queryKey"
  >,
) {
  const supabase = createClient();

  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      return request<T>(
        "https://meoswtswmoxezfkhguxl.supabase.co/graphql/v1",
        document,
        variables,
        {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: session?.access_token
            ? `Bearer ${session.access_token}`
            : undefined,
        },
      );
    },
    ...queryOptions,
  });
}
