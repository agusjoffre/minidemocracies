"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

type Response = {
  data: Democracy | null;
  error: string | null;
  success: boolean;
};

export const getDemocracy = async (democracyId: string): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("minidemocracies")
    .select()
    .eq("id", democracyId)
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
      error: "Democracy not found",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
