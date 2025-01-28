// pages/api/supabaseQuery.ts

import { NextApiRequest, NextApiResponse } from "next";
import request from "graphql-request";
import { createClient } from "@/utils/supabase/server";

// Initialize Supabase client with a public key

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { document, variables } = req.body;
  const supabase = await createClient();
  // Get the user session based on cookies (automatically managed by Supabase client)
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  // Handle no session or session retrieval error
  if (authError || !user) {
    return res.status(401).json({ error: "User not authenticated." });
  }
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !user) {
    return res.status(401).json({ error: "User not authenticated." });
  }
  try {
    // Perform GraphQL request with user's access token
    const data = await request(
      "https://meoswtswmoxezfkhguxl.supabase.co/graphql/v1",
      document,
      variables,
      { Authorization: `Bearer ${!session.access_token}` },
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
