import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createEditCabin(newCabin, idCabin) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "").replaceAll(" ", "");
  const imageURL = hasImage ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  if (
    idCabin === undefined ||
    idCabin === null ||
    (typeof idCabin === "object" && !Number.isInteger(Number(idCabin?.id)))
  )
    query = query
      .insert([{ ...newCabin, image: imageURL }])
      .select()
      .single();
  else
    query = query
      .update({ ...newCabin, image: imageURL })
      .eq("id", idCabin || undefined)
      .select()
      .single();

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be insert");
  }

  const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Image file could not be insert");
  }

  return data;
}
