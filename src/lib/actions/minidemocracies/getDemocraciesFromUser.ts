"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy, User } from "@/lib/types";

export const getDemocraciesFromUser = async (userId: string) => {
  const db = await createClient();
};
