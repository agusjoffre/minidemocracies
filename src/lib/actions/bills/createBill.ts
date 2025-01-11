"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

type Response = {
  success: boolean;
  error: string | null;
  data: Bill | null;
};

export const createBill = async (bill: Bill): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db.from("bills").insert(bill).select().single();

  if (error) {
    return {
      data: null,
      success: false,
      error: error.message,
    };
  }

  if (!data) {
    return {
      error: "Bill not created. No data returned",
      success: false,
      data: null,
    };
  }

  return {
    success: true,
    error: null,
    data,
  };
};
