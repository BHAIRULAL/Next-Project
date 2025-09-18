"use server";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  //   console.log("formData", title, price, description);

  const errors: Errors = {};
  if (!title) {
    errors.title = "Title required";
  }
  if (!price) {
    errors.price = "Price required";
  }
  if (!description) {
    errors.description = "Description required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000)); // intetional delay to see pending status

  return { errors: {} };
  //Call your API here to add product
};
