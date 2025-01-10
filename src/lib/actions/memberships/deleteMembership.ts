"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

export const deleteMembership = async (membershipId: string) => {
  const db = await createClient();
};
