"use server";

import { createClient } from "@/lib/supabase/server";
import { Membership } from "@/lib/types";

type Response = {
  success: boolean;
  data: Membership[] | null;
  error: string | null;
};

export const getMembershipsFromUser = async (
  userId: string
): Promise<Response> => {
  const db = await createClient();

  const { data: dataMemberships, error: membershipsError } = await db
    .from("memberships")
    .select()
    .eq("user_id", userId);

  if (membershipsError) {
    return {
      data: null,
      error: membershipsError.message,
      success: false,
    };
  }

  if (!dataMemberships) {
    return {
      data: null,
      error: "Memberships not fetched. No data returned",
      success: false,
    };
  }

  return {
    data: dataMemberships as Membership[],
    error: null,
    success: true,
  };
};
