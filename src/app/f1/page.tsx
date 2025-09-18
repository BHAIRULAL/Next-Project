import Link from "next/link";

const F1 = () => {
  return (
    <>
      <h1>F1 page</h1>
      <Link href={"/f1/f2"}> Go to F2</Link>
      <Link href={"/f3"}> Go to F3</Link>
    </>
  );
};
export default F1;
