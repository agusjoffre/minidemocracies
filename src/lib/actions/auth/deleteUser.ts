"use server";

import { createClient } from "@/lib/supabase/server";

type Response = {
  success: boolean;
  error: string | null;
};

export const deleteUser = async (id: string): Promise<Response> => {
  const db = await createClient();

  const { error } = await db.from("users").delete().eq("id", id);

  if (error)
    return {
      error: error.message,
      success: false,
    };

  return {
    error: null,
    success: true,
  };
};
