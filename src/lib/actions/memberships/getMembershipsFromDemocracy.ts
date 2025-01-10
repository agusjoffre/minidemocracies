"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

export const getMembershipsFromDemocracy = async (democracyId: string) => {
  const db = await createClient();
};
