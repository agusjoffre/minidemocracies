"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

export const getOneBill = async (billId: string) => {
  const db = await createClient();
};
