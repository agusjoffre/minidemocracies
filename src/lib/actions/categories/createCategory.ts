"use server";

import { createClient } from "@/lib/supabase/server";
import { Category } from "@/lib/types";

export const createCategory = async (category: Category) => {
  const db = await createClient();
};
