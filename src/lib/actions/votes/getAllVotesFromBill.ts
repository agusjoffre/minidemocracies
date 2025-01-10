"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy, Vote } from "@/lib/types";

export const getAllVotesFromBill = async (billId: string) => {
  const db = await createClient();
};
