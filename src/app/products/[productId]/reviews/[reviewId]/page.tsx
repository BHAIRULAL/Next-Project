import { notFound } from "next/navigation";

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: number; reviewId: number }>;
}) => {
  const random = getRandomNumber(2);
  if (random == 1) {
    throw new Error("Error in review page");
  }

  const { productId, reviewId } = await params;
  if (reviewId > 50) {
    notFound();
  }

  return (
    <>
      Review Details for review id : {reviewId} of product {productId}
    </>
  );
};

export default ReviewDetails;
