"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

export const updateDemocracy = async (democracy: Democracy) => {
  const db = await createClient();
};
