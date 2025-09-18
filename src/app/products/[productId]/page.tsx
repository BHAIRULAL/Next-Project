import { Metadata } from "next";

export const generateStaticParams = () => {
  return [{ productId: "1" }];
};

type ProductProps = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId} `,
  };
};

const ProductDetails = async ({ params }: ProductProps) => {
  const { productId } = await params;

  return <>Product Details : {productId}</>;
};

export default ProductDetails;
