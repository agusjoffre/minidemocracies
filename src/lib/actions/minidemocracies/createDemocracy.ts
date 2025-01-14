"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

type Response = {
  success: boolean;
  data: Democracy | null;
  error: string | null;
};

export const createDemocracy = async (
  democracy: Omit<Democracy, "id" | "invite_code">
): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("minidemocracies")
    .insert(democracy)
    .select()
    .single();

  if (error) {
    return {
      data: null,
      success: false,
      error: error.message,
    };
  }

  if (!data) {
    return {
      error: "Democracy not created. No data returned",
      success: false,
      data: null,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
