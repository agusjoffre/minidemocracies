"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

export const deleteDemocracy = async (democracyId: string) => {
  const db = await createClient();
};
