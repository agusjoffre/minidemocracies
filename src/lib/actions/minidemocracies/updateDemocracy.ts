"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

type Response = {
  success: boolean;
  data: Democracy | null;
  error: string | null;
};

export const updateDemocracy = async (
  democracy: Democracy
): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("minidemocracies")
    .update(democracy)
    .eq("id", democracy.id);

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
      error: "Democracy not updated. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
