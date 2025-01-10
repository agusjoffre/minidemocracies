"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

export const createMembership = async (membership: Membership) => {
  const db = await createClient();
};
