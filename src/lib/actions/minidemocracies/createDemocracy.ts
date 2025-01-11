"use server";

import { createClient } from "@/lib/supabase/server";
import { Democracy } from "@/lib/types";

type Response = {
  success: boolean;
  data: Democracy | null;
  error: string | null;
};

// IMPORTANTE: CUANDO SE CREA LA MINIDEMOCRACY DEBE CREARSE UN MEMBERSHIP ASOCIADO CON EL USER. SINO NO SERA UNIDO A LA DEMOCRACIA.
// ESTO ES ASI PARA QUE NO EXISTAN OWNERS O CREATORS DE DEMOCRACIAS.

export const createDemocracy = async (
  democracy: Omit<Democracy, "id">
): Promise<Response> => {
  const db = await createClient();

  const { data, error } = await db
    .from("minidemocracies")
    .insert(democracy)
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
      error: "Democracy not created. No data returned",
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
