"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

export const getAllDemocracies = async () => {
  const db = await createClient();
};
