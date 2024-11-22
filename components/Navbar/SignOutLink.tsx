"use client"

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast"

const SignOutLink = () => {

const { toast } = useToast()

const handleSignOut = () => {
    toast({
        title: "ลงชื่อออกสำเร็จ",
        description: "กำลังลงชื่อออกจากระบบ",
    })
}

  return (
   <SignOutButton>
    <Button onClick={handleSignOut} className="w-full bg-red-500 hover:bg-red-600 text-white">ลงชื่อออก</Button>
   </SignOutButton>
  )
}
export default SignOutLink