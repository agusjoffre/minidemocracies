"use server";

import { createClient } from "@/lib/supabase/server";
import { Category } from "@/lib/types";

export const updateCategory = async (category: Category) => {
  const db = await createClient();
};
