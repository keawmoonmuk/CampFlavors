// นำเข้า Zod library สำหรับการ validate ข้อมูล
import {  Schema, z, ZodSchema } from "zod";

// กำหนด Schema สำหรับ Profile
// z.object() ใช้สร้าง schema object ที่มี field ต่างๆ
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  userName: z.string().min(2, { message: "user name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
});

// ฟังก์ชัน validateWithZod รับ parameter 2 ตัว
// 1. schema: ZodSchema<T> - schema ที่ใช้ validate
// 2. data: any - ข้อมูลที่จะ validate
export const validateWithZod = <T>(schema: ZodSchema<T>) => (data: any) => {
  // ทำการ validate ข้อมูลด้วย safeParse
  const result = schema.safeParse(data);
  // ถ้า validate ไม่ผ่าน
  if (!result.success) {
    // แปลง error messages เป็น array แล้ว join ด้วย comma
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};