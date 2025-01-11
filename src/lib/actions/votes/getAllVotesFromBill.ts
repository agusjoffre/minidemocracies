"use server";

import { createClient } from "@/lib/supabase/server";
import { Vote } from "@/lib/types";

type Response = {
  data: Vote[] | null;
  error: string | null;
  success: boolean;
};

export const getAllVotesFromBill = async (
  billId: string
): Promise<Response> => {
  const db = await createClient();

  const { error, data } = await db
    .from("votes")
    .select()
    .eq("bill_id", billId)
    .single();

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
      error: "Votes not fetched. Data is not array",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
