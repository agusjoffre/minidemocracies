"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

type Response = {
  error: string;
  success: boolean;
};

export const deleteMembership = async (membershipId: string) => {
  const db = await createClient();

  const { error } = await db
    .from("memberships")
    .delete()
    .eq("id", membershipId);

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    error: null,
  };
};
