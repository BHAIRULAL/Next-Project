'use client'
import { usePathname } from "next/navigation";
const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName.split('/')[2]
  const reviewId = pathName.split('/')[4]
  return (
    <div>
      <h2>Review Not Found</h2>
      <p>Review Not Found for review ID : {reviewId} for product ID : {productId}</p>
    </div>
  );
};

export default NotFound;
