import { createClient } from "@/utils/supabase/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useMutation } from "@tanstack/react-query";
import request from "graphql-request";

// Define a generic type for the hook based on the document's structure
export function useClientSupabaseMutation<
  T,
  Variables extends Record<string, any> = Record<string, any>,
>(
  document: TypedDocumentNode<T, Variables>,
  mutationOptions?: Omit<
    Parameters<typeof useMutation<T, unknown, Variables>>[0],
    "mutationFn"
  >,
) {
  const supabase = createClient();

  return useMutation<T, unknown, Variables>({
    mutationFn: async (variables: Variables) => {
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
    ...mutationOptions,
  });
}
