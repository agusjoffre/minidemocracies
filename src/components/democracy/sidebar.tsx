"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useDemocracyMenuStore } from "@/lib/stores/sidebarDemocracyPageStore";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

type Item = {
  title: "Main" | "Bills" | "Members" | "Forum" | "History";
  name: "MAIN" | "BILLS" | "MEMBERS" | "FORUM" | "HISTORY";
};

// Menu items.
const items: Item[] = [
  {
    title: "Main",
    name: "MAIN",
  },
  {
    title: "Bills",
    name: "BILLS",
  },
  {
    title: "Members",
    name: "MEMBERS",
  },
  {
    title: "Forum",
    name: "FORUM",
  },
  {
    title: "History",
    name: "HISTORY",
  },
];

export function DemocracySidebar() {
  const { selectedMenu, setSelectedMenu } = useDemocracyMenuStore();

  return (
    <Card className="md:w-36 md:h-80 flex flex-col items-center w-full sticky top-0">
      <CardHeader></CardHeader>
      <CardContent>
        {items.map((item) => (
          <Button
            key={item.name}
            onClick={() => setSelectedMenu(item.name)}
            variant={"link"}
            className={
              item.name === selectedMenu ? "text-accent" : "text-muted"
            }
          >
            {item.title}
          </Button>
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
