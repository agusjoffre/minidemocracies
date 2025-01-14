import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Plus, PlusSquare, UserPlus2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

type Props = {};

const AddOrJoinBtn = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-72 h-72">
        <Button variant={"accent"} className="rounded-lg">
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="flex items-center cursor-pointer">
          <Link href={"/browse"} className="flex items-center gap-2">
            <UserPlus2 />
            <p>Join a MiniDemocracy</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center cursor-pointer">
          <Link href={"/dashboard/create"} className="flex items-center gap-2">
            <PlusSquare />
            <p>Create a MiniDemocracy</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddOrJoinBtn;
