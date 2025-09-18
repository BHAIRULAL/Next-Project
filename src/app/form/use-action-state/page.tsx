"use client";
import { useActionState } from "react";
import "../../globals.css";
import { createProduct, FormState } from "@/actions/productActions";

const Form = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="form-container">
      <div className="input-group">
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input type="text" id="title" name="title" className="input-field" />
        {state.errors.title && (
          <p className="input-error">{state.errors.title}</p>
        )}
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="price">
          Price
        </label>
        <input type="number" id="price" name="price" className="input-field" />
        {state.errors.price && (
          <p className="input-error">{state.errors.price}</p>
        )}
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="textarea-field"
        />
        {state.errors.description && (
          <p className="input-error">{state.errors.description}</p>
        )}
      </div>
      {/* <SubmitButton /> */}
      <button type="submit" className="submit-button" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
