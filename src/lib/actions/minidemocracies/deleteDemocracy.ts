"use server";

import { createClient } from "@/lib/supabase/server";

type Response = {
  success: boolean;
  error: string | null;
};

export const deleteDemocracy = async (democracyId: string) => {
  const db = await createClient();

  const { error, status } = await db
    .from("minidemocracies")
    .delete()
    .eq("id", democracyId);

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  if (status !== 200 && status !== 204 && status !== 201) {
    return {
      success: false,
      error: "Democracy not deleted",
    };
  }

  return {
    success: true,
    error: null,
  };
};
