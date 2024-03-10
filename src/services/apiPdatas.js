import supabase, { supabaseUrl } from "./supabase";

export async function getPdatas() {
  const { data, error } = await supabase.from("pdatas").select("*");
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("Pdatas could not be loaded");
  }
  return data;
}

export async function createEditPdata(newPdata, id) {
  const hasImagePath = newPdata.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newPdata.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newPdata.image
    : `${supabaseUrl}/storage/v1/object/public/pdata-images/${imageName}`;

  let query = supabase.from("pdatas");

  if (!id) query = query.insert([{ ...newPdata, image: imagePath }]);

  if (id) query = query.update({ ...newPdata, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Pdata could not be created");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("pdata-images")
    .upload(imageName, newPdata.image);

  if (storageError) {
    await supabase.from("pdatas").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Pdata image could not be uploaded and the pdata was not created"
    );
  }

  return data;
}

export async function deletePdata(id) {
  const { data, error } = await supabase.from("pdatas").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Pdata could not be deleted");
  }

  return data;
}
