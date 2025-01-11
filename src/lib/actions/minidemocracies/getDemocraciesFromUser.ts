"use server";

import { Democracy } from "@/lib/types";
import { getDemocracy } from "./getDemocracy";
import { getMembershipsFromUser } from "../memberships/getMembershipsFromUser";

type Response = {
  data: Democracy[] | null;
  error: string | null;
  success: boolean;
};

export const getDemocraciesFromUser = async (
  userId: string
): Promise<Response> => {
  const {
    data: memberships,
    error: membershipsError,
    success: membershipsSuccess,
  } = await getMembershipsFromUser(userId);

  if (!membershipsSuccess) {
    return {
      data: null,
      error: membershipsError || "Failed to fetch memberships",
      success: false,
    };
  }

  if (!Array.isArray(memberships)) {
    return {
      data: null,
      error: "No data. No memberships array returned",
      success: false,
    };
  }

  // Fetch democracies in parallel
  const results = await Promise.allSettled(
    memberships.map(async (membership) => {
      const {
        data: democracy,
        error,
        success,
      } = await getDemocracy(membership.minidemocracy_id);
      if (!success || !democracy) {
        return {
          status: "rejected",
          reason: error || "Failed to fetch democracy",
        };
      }
      return democracy as Democracy;
    })
  );

  // Filter successful results
  const democracies = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<Democracy>).value);

  const failedResults = results.filter(
    (result) => result.status === "rejected"
  );

  if (failedResults.length > 0) {
    return {
      data: null,
      error: failedResults
        .map((result) => (result as PromiseRejectedResult).reason)
        .join(", "),
      success: false,
    };
  }

  if (!Array.isArray(democracies)) {
    return {
      data: null,
      error: "No data. No democracies array returned",
      success: false,
    };
  }

  return {
    data: democracies,
    error: null,
    success: true,
  };
};
