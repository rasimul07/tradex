'use server'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { docUploadSchema, validateWithZodSchema } from "./schemas";
import { uploadAFileToSupabase } from "./supabase";
import db from './db';
import { revalidatePath } from "next/cache";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

const getAuthUser = async()=>{
  const user = await currentUser();
  if(!user) redirect("/");
  return user;
}

export const filesUpload = async (prevState: any, formData: FormData): Promise<{message:string}> => {
  try{ 
    const user = await getAuthUser()
    const {identity,bankStatement,photo,signature} = Object.fromEntries(formData);
    const courseId = formData.get('courseId') as string;
    const validateFiles = validateWithZodSchema(docUploadSchema, {
      identity,
      bankStatement,
      photo,
      signature,
    });
    const identityUrl = await uploadAFileToSupabase(validateFiles.identity)
    const photoUrl = await uploadAFileToSupabase(validateFiles.photo)
    const bankStatementUrl = await uploadAFileToSupabase(validateFiles.bankStatement)
    const signatureUrl = await uploadAFileToSupabase(validateFiles.signature)
    await db.purchase.create({
      data:{
        clerkId: user.id,
        courseId,
        photo:photoUrl,
        bankStatement:bankStatementUrl,
        identity:identityUrl,
        signature:signatureUrl
      }
    })
    return {message:'agreement successfully submitted!!!'} 
  }catch(error){
    return renderError(error);
  }
};

// model Purchase {
//   id           String   @id @default(auto()) @map("_id") @db.ObjectId
//   clerkId      String
//   course       Course   @relation(fields: [courseId], references: [id])
//   courseId     String   @db.ObjectId  // Foreign key to Course
//   purchaseDate DateTime @default(now())  // When the purchase was made
//   price        Float
//   //agreement docs
//   photo String?
//   selfVideo String?
//   bankStatement String?
//   identity String?
//   signature String?
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }

export const fetchAllPrograms = async()=>{
    const programs = await db.course.findMany({
      where:{
        isProgram:true
      },
      orderBy:{
        createdAt:'desc'
      }
    })
    return programs;
  
}
export const fetchSingleCourse = async ({ courseId }: { courseId: string }) => {
  const course = await db.course.findUnique({
    where: {
      id:courseId
    }
  });
  return course;
};