"use server";

import { createClient } from "@/lib/supabase/server";
import { Category, Democracy } from "@/lib/types";

export const getAllCategoriesFromDemocracy = async (demoocracyId: string) => {
  const db = await createClient();
};
