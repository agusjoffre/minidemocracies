"use server";

import { createClient } from "@/lib/supabase/server";
import { Vote } from "@/lib/types";

type Response = {
  data: Vote | null;
  error: string | null;
  success: boolean;
};

export const createVote = async (vote: Omit<Vote, "id">): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db.from("votes").insert(vote).select().single();

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
      error: "Vote not created. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
