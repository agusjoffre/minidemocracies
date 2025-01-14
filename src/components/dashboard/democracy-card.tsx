"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Status } from "@/lib/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  democracyFlagUrl: string;
  membershipStatus: Status.PENDING | Status.ACCEPTED | Status.REJECTED;
  democracyName: string;
  numberOfMembers: number;
  democracyId: string;
};

export default function DemocracyCard({
  democracyFlagUrl,
  membershipStatus,
  democracyName,
  numberOfMembers,
  democracyId,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-72 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0">
        <div className="relative h-48">
          <Image
            src={democracyFlagUrl}
            width={100}
            height={100}
            alt={democracyName}
            className="w-full h-full object-cover"
          />
          {membershipStatus === Status.ACCEPTED ? null : membershipStatus ===
            Status.REJECTED ? (
            <Badge className="absolute top-2 left-2" variant="destructive">
              {membershipStatus}
            </Badge>
          ) : (
            <Badge className="absolute top-2 left-2 bg-muted text-white">
              {membershipStatus}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pb-0">
        <h3 className="text-xl font-semibold mb-2">{democracyName}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-4 justify-center ${
            isHovered ? "max-h-24" : "max-h-0"
          }`}
        >
          <p className="text-base text-muted-foreground">
            Members: {numberOfMembers}
          </p>
          <Link href={`/democracies/${democracyId}`}>
            <Button variant={"accent"} className="w-full">
              Go
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
