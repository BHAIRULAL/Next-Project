"use client";
import { serverSideUtilsFunction } from "../utils/server-utils";

const ClientComponent = () => {
  const result = serverSideUtilsFunction();
  return (
    <>
      <h1>Client Component : {result}</h1>
    </>
  );
};
export default ClientComponent;
