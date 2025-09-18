import { serverSideUtilsFunction } from "../utils/server-utils";

const ServerComponent = () => {
  const result = serverSideUtilsFunction();
  return (
    <>
      <h1>Server Component : {result}</h1>
    </>
  );
};
export default ServerComponent;
