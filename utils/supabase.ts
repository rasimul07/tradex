import { createClient } from "@supabase/supabase-js";
const bucket = "My bucket";
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadAFileToSupabase = async (file: File) => {
  const timestamp = Date.now();
  // const newName = `/users/${timestamp}-${image.name}`;
  const newName = `${timestamp}-${file.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(`tradex/${newName}`, file, {
      cacheControl: "3600",
    });
  if (!data) throw new Error("file upload failed");
  return supabase.storage.from(bucket).getPublicUrl(`tradex/${newName}`).data
    .publicUrl;
};

export const deleteAFile = async (url: string) => {
  const fileName = url.split("/").pop();
  if (!fileName) throw new Error("Invalid URL");
  return supabase.storage.from(bucket).remove([fileName]);
};


//develepment reference : https://supabase.com/docs/reference/javascript