"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

export const createBill = async (bill: Bill) => {
  const db = await createClient();
};
