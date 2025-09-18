"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <h1>{error.message}</h1>
      <p>
        <button onClick={() => reload()}>Try Again</button>
      </p>
    </>
  );
};
export default ErrorBoundary;
