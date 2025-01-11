"use server";

import { createClient } from "@/lib/supabase/server";
import { Vote } from "@/lib/types";

type Response = {
  data: Vote | null;
  error: string | null;
  success: boolean;
};

export const getVote = async (voteId: string): Promise<Response> => {
  const db = await createClient();

  const { error, data } = await db
    .from("votes")
    .select()
    .eq("id", voteId)
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  if (!data) {
    return {
      data: null,
      error: "Vote not fetched. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
