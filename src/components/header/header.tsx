import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NotificationsButton from "../notificationsBtn";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Navbar from "./navbar";
import NavMenu from "./menunav";

type Props = {};

const Header = async (props: Props) => {
  const user = await currentUser();

  return (
    <header className="flex items-center justify-between md:h-24 md:shadow-sm sm:px-4 px-2 h-11">
      <div className="md:flex md:items-center md:gap-4 flex justify-center items-center">
        <div className="flex items-center md:hidden">
          <NavMenu isLoggedIn={!!user} />
        </div>
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={100}
            height={100}
            className="md:flex hidden cursor-pointer"
          />
        </Link>
        {user && (
          <Button
            variant={"accent"}
            className="text-sm font-medium md:flex justify-center items-center hidden"
          >
            Start now!
          </Button>
        )}
      </div>
      <div className="md:inline hidden">
        <Navbar isLoggedIn={!!user} />
      </div>

      {user ? (
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:inline hidden">
            <NotificationsButton />
          </div>
          <div className="flex items-center gap-2">
            <UserButton />
            <h2 className="md:text-sm md:font-medium hidden">
              {user.username}
            </h2>
          </div>
        </div>
      ) : (
        <div className="md:flex md:items-center md:gap-8">
          <Link href="/sign-up">
            <Button
              variant={"default"}
              className="bg-emerald-600 text-sm  font-medium text-background hover:bg-emerald-600/80"
            >
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
