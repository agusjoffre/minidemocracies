"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy, Vote } from "@/lib/types";

export const deleteVote = async (voteId: string) => {
  const db = await createClient();
};
