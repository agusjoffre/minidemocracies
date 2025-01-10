"use server";

import { createClient } from "@/lib/supabase/server";
import { Post } from "@/lib/types";

export const createPost = async (post: Post) => {
  const db = await createClient();
};
