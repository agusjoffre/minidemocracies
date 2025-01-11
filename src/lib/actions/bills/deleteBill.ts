"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

type Response = {
  success: boolean;
  error: string | null;
};

export const deleteBill = async (billId: string): Promise<Response> => {
  const db = await createClient();

  const { error } = await db.from("bills").delete().eq("id", billId);

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    error: null,
  };
};
