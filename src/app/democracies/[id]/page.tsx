import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DemocracyPage = async ({ params }: Props) => {
  const democracyId = await Promise.resolve(params.id);

  return <div>DemocracyPage: {democracyId}</div>;
};

export default DemocracyPage;
