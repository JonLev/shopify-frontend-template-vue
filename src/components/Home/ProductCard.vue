<template>
  <Card
    :title="t('ProductsCard.title')"
    sectioned
    :primaryFooterAction="{
      content: t('ProductsCard.populateProductsButton', { count: productsCount }),
      onAction: handleAddProduct,
      loading: isLoading,
    }"
  >
    <TextContainer spacing="loose">
      <p>{{ t('ProductsCard.description') }}</p>
      <Text as="h4" variant="headingMd">
        {{ t('ProductsCard.totalProductsHeading') }}
        <Text variant="bodyMd" as="p" fontWeight="semibold">
          {{ isLoadingCount ? "-" : productCount }}
        </Text>
      </Text>
    </TextContainer>
  </Card>
</template>

<script setup lang="ts">
import { Toast } from '@shopify/app-bridge/actions';
import { useAppBridge } from 'src/composables/useAppBridge';
import { useProductStore } from 'src/stores/productStore';

const { t } = useTranslation();
const { appBridge } = useAppBridge();
const { isLoading, setIsLoading, isLoadingCount, addProduct, refetchProductCount, productsCount } = useProductStore();

const handleAddProduct = async () => {
  const response = await addProduct();

  let toast;
  if (response.ok) {
    await refetchProductCount();
    toast = Toast.create(appBridge, {
      message: t('ProductsCard.productsCreatedToast'),
      duration: 3000,
      isError: false
    })
  } else {
    setIsLoading(false);
    toast = Toast.create(appBridge, {
      message: t('ProductsCard.errorCreatingProductsToast'),
      duration: 3000,
      isError: true
    })
  }
  toast.dispatch(Toast.Action.SHOW);
};
</script>