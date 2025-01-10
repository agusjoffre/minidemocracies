"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy, Vote } from "@/lib/types";

export const updateVote = async (vote: Vote) => {
  const db = await createClient();
};
