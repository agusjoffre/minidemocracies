"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

type Response = {
  data: Bill | null;
  error: string | null;
  success: boolean;
};

export const getOneBill = async (billId: string): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("bills")
    .select()
    .eq("id", billId)
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
      error: "Bill not fetched. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
