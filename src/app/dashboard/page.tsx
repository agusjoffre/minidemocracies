import DemocraciesList from "@/components/dashboard/democracies-list";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-16 px-4">
      <h1 className="text-lg md:text-3xl font-semibold">My Consensys</h1>

      <DemocraciesList />
    </main>
  );
};

export default DashboardPage;
