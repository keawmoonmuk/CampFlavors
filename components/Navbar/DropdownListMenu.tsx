import { AlignLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2 px-3 py-2 hover:bg-accent">
            <AlignLeft className="h-5 w-5" />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">บัญชีของฉัน</p>
              <p className="text-xs text-muted-foreground">จัดการบัญชีและการตั้งค่า</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* เมื่อยังไม่ลงชื่อเข้าใช้ */}
          <SignedOut>
            <DropdownMenuItem className="p-2">
              <SignInButton mode="modal">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  ลงชื่อเข้าใช้
                </Button>
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-2">
              <SignUpButton mode="modal">
                <Button variant="outline" className="w-full">
                  สมัครสมาชิก
                </Button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {/* เมื่อลงชื่อเข้าใช้ */}
          <SignedIn>
            {links.map((link, index) => {
              return (
                <DropdownMenuItem key={index} className="gap-3 p-2">
                  <Link href={link.href} className="w-full flex items-center gap-2 text-sm">
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-2">
              <SignOutLink />
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default DropdownListMenu;
