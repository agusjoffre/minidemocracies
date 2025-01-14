import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DemocracyPage = (props: Props) => {
  const democracyId = props.params.id;

  return <div>DemocracyPage: {democracyId}</div>;
};

export default DemocracyPage;
