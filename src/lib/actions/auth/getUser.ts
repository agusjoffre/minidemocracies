"use server";

import { User } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

type Response = {
  success: boolean;
  data?: User;
  error: string | null;
};

export const getUser = async (userId: string): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("users")
    .select()
    .eq("id", userId)
    .single();

  if (error)
    return {
      error: error.message,
      success: false,
    };

  if (!data)
    return { error: "User not fetched. No data returned", success: false };

  return {
    data,
    error: null,
    success: true,
  };
};
