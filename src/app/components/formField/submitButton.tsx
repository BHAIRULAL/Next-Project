"use client";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="submit-button" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
