import React from "react";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

type Props = {};

const NotificationsButton = (props: Props) => {
  return (
    <Button
      variant={"outline"}
      className="text-accent  hover:text-accent-foreground px-4"
    >
      <Bell />
    </Button>
  );
};

export default NotificationsButton;
