"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

export const updateMembership = async (membership: Membership) => {
  const db = await createClient();
};
