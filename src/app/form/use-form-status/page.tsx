import { SubmitButton } from "../../components/formField/submitButton";
import "../../globals.css";
const SimpleForm = () => {
  const createProduct = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    console.log("formData", title, price, description);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // intetional delay to see pending status
  };
  return (
    <form action={createProduct} className="form-container">
      <div className="input-group">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="input-field"
          required
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="input-field"
          required
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="textarea-field"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default SimpleForm;
