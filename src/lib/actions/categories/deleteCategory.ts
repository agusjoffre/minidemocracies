"use server";

import { createClient } from "@/lib/supabase/server";
import { Category } from "@/lib/types";

export const deleteCategory = async (categoryId: string) => {
  const db = await createClient();
};
