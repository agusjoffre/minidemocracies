import React from "react";
import AddOrJoinBtn from "./add-join-btn";
import { Plus } from "lucide-react";
import DemocracyCard from "./democracy-card";
import { Status } from "@/lib/types";

type Props = {};

const DemocraciesList = (props: Props) => {
  return (
    <div className="w-full flex gap-8 flex-col md:flex-row justify-center">
      <AddOrJoinBtn />

      <div className="grid md:grid-cols-4 gap-4">
        <DemocracyCard
          democracyFlagUrl="/Logo.png"
          democracyName="Testing"
          membershipStatus={Status.PENDING}
          numberOfMembers={12}
          democracyId={"1"}
        />
        <DemocracyCard
          democracyFlagUrl="/Logo.png"
          democracyName="Testing"
          membershipStatus={Status.ACCEPTED}
          numberOfMembers={12}
          democracyId={"2"}
        />
        <DemocracyCard
          democracyFlagUrl="/Logo.png"
          democracyName="Testing"
          membershipStatus={Status.REJECTED}
          numberOfMembers={12}
          democracyId={"3"}
        />
      </div>
    </div>
  );
};

export default DemocraciesList;
