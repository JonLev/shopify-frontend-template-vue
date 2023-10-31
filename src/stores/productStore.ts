import { acceptHMRUpdate, defineStore } from 'pinia';
import { useAppQuery } from 'src/composables/useAppQuery';
import { useAuthenticatedFetch } from 'src/composables/useAuthenticatedFetch';

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false);
  const setIsLoading = (value: boolean) => {
    isLoading.value = value;
  }

  const {
    data: productCount,
    isLoading: isProductCountLoading,
    refetch: refetchProductCount,
    isRefetching: isProductCountRefetching,
  } = useAppQuery({
    url: '/api/products/count', queryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    }
  })
  const authenticatedFetch = useAuthenticatedFetch();

  const addProduct = async (product: any) => {
    setIsLoading(true);
    const response = await authenticatedFetch('/api/products/create');
    return response;
  }

  return {
    isLoading,
    setIsLoading,
    addProduct,
    productCount,
    isProductCountLoading,
    refetchProductCount,
    isProductCountRefetching,
  }
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));