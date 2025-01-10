"use server";

import { createClient } from "@/lib/supabase/server";
import { Post } from "@/lib/types";

export const getAllPostsFromCitizen = async (citizen_id: string) => {
  const db = await createClient();
};
