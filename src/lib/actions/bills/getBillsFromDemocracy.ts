"use server";

import { createClient } from "@/lib/supabase/server";
import { Bill } from "@/lib/types";

export const getBillsFromDemocracy = async (democracyId: string) => {
  const db = await createClient();
};
