"use server";

import { createClient } from "@/lib/supabase/server";
import { Post } from "@/lib/types";

export const deletePost = async (postId: string) => {
  const db = await createClient();
};
