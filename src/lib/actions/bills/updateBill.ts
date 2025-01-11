"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

export const updateBill = async (bill: Bill) => {
  const db = await createClient();

  const { data, error } = await db
    .from("bills")
    .update(bill)
    .eq("id", bill.id)
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
      error: "Bill not updated. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
