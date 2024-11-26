"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { profileSchema, validateWithZod } from "../utils/schemas";
import database from "../utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  //console.log("Test USER 555", user);

  // ถ้าไม่มี user profile
  if (!user) {
    throw new Error("Unauthorized - No user found กรุณาเข้าสู่ระบบ");
  }
  //ถ้าไม่มี user profile ให้ไปยังหน้า create profile
  if(!user.privateMetadata.hashProfile) {
    redirect("/profile/create");
  }
  return user;

};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred!!1",
  };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    //ตรวจสอบว่ามี user หรือไม่
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    const validateFields = validateWithZod(profileSchema)(rawData);
     console.log("validateFields", validateFields);

     //สร้าง profile ใน database
     await database.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        firstName: validateFields.firstName,
        lastName: validateFields.lastName,
        userName: validateFields.userName,
        
      },
     });

     //อัพเดต user metadata ใน clerk
     const client = await clerkClient();
     await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hashProfile : true,
      },
     });

    //return { message: "Profile created successfully" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
  redirect("/");
};


export const createLandMarkAction = async (
  prevState: any,
  formData: FormData
) : Promise<{message: string}> => {
  try {
    //ตรวจสอบว่ามี user หรือไม่
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    //const validateFields = validateWithZod(profileSchema)(rawData);
     console.log("validateFields", rawData);

    return { message: "created land mark successfully" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
 // redirect("/");
};
