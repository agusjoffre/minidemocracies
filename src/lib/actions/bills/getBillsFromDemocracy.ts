"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

type Response = {
  success: boolean;
  data: Bill[] | null;
  error: string | null;
};

export const getBillsFromDemocracy = async (
  democracyId: string
): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("bills")
    .select()
    .eq("minidemocracy_id", democracyId);

  if (error) {
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }

  if (!Array.isArray(data)) {
    return {
      success: false,
      error: "No data. No bills array returned",
      data: null,
    };
  }

  return {
    success: true,
    error: null,
    data,
  };
};
