"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

type Response = {
  success: boolean;
  data: Membership | null;
  error: string | null;
};

export const updateMembership = async (membership: Membership) => {
  const db = await createClient();

  const { data, error } = await db
    .from("mememberships")
    .update(membership)
    .eq("id", membership.id)
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  if (!data) {
    return {
      data: null,
      error: "Membership not updated. No data returned",
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
