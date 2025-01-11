"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";
import { getUser } from "../auth/getUser";

type Response = {
  data: Democracy[] | null;
  success: boolean;
  error: string | null;
};

export const getAllDemocracies = async (userId: string): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("minidemocracies")
    .select()
    .is("isPublic", true)
    .order("created_at", { ascending: false });

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  if (!Array.isArray(data)) {
    return {
      data: null,
      error: "No data. No democracies array returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
