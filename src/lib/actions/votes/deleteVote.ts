"use server";

import { createClient } from "@/lib/supabase/server";

type Response = {
  error: string | null;
  success: boolean;
};

export const deleteVote = async (voteId: string): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db.from("votes").delete().eq("id", voteId);

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  return {
    success: true,
    error: null,
  };
};
