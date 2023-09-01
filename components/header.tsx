import Link from "next/link";
import Image from "next/image";
import { NavSignIn } from "./sign-in";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

import SignOut from "./sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Header() {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <header className="container">
      <div className="flex items-center justify-between border-b py-4">
        <Link className="flex font-black uppercase" href="/">
          <Image alt="default logo" src="logo.svg" width={50} height={50} />
        </Link>
        {!session ? (
          <div className="flex items-center justify-between gap-2">
            <NavSignIn />
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="h-8 w-8">
              <Avatar>
                <AvatarImage src={session.user?.image || undefined} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-xs">
                {session.user?.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <SignOut>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </SignOut>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
