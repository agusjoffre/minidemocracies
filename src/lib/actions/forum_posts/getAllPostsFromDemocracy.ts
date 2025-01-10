"use server";

import { createClient } from "@/lib/supabase/server";
import { Post } from "@/lib/types";

export const getAllPostsFromDemocracy = async (democracyId: string) => {
  const db = await createClient();
};
