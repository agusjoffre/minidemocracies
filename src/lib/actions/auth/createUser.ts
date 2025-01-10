"use server";

import { User } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

type Response = {
  success: boolean;
  data?: User;
  error: string | null;
};

export const createUser = async (user: User): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db.from("users").insert(user).select().single();

  if (error)
    return {
      error: error.message,
      success: false,
    };

  if (!data)
    return { error: "User not created. No data returned", success: false };

  return {
    data,
    error: null,
    success: true,
  };
};
