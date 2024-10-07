import { useRouter } from "next/navigation";

export const useProductCardActions = () => {
  const router = useRouter();
  const goToProductPage = (productId: string | undefined) => {
    router.push(`/shop/${productId}`);
  };
  return { goToProductPage };
};
