import { DemocracyForm } from "@/components/democracy/createForm/createDemocracyForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQueryClient } from "@/lib/getQueryClient";
import { currentUser } from "@clerk/nextjs/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const CreateDemocracyPage = async (props: Props) => {
  const queryClient = getQueryClient();

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <Card className="md:w-1/2 w-full">
        <CardHeader>
          <CardTitle className="md:text-2xl">Create a MiniDemocracy</CardTitle>
        </CardHeader>
        <CardContent>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <DemocracyForm userId={user?.id} />
          </HydrationBoundary>
        </CardContent>
      </Card>
    </main>
  );
};

export default CreateDemocracyPage;
