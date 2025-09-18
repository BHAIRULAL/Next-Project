const productDetailsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {children}
      <h1>Feature Products</h1>
    </>
  );
};

export default productDetailsLayout;
