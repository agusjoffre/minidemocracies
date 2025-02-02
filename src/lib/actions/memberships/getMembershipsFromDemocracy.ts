"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

type Response = {
  success: boolean;
  data: Membership[] | null;
  error: string | null;
};

export const getMembershipsFromDemocracy = async (democracyId: string) => {
  const db = await createClient();

  const { data, error } = await db
    .from("memberships")
    .select()
    .eq("democracy_id", democracyId);

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
      error: "No data. No memberships array returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
