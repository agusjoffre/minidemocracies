import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DemocracyPage = async ({ params }: Props) => {
  const democracyId = await params.id;

  return <div>DemocracyPage: {democracyId}</div>;
};

export default DemocracyPage;
