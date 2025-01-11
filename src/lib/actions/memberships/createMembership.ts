"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

type Response = {
  success: boolean;
  data: Membership | null;
  error: string | null;
};

export const createMembership = async (
  membership: Omit<Membership, "id">
): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("memberships")
    .insert(membership)
    .select()
    .single();

  if (error) {
    return {
      data: null,
      success: false,
      error: error.message,
    };
  }

  if (!data) {
    return {
      error: "Membership not created. No data returned",
      success: false,
      data: null,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
};
