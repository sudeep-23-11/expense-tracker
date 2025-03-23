"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"./logo.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800  font-bold text-xl">Expense Tracker</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/sign-in"}>
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="rounded-full">
              Join Now
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;