<template>
  <Card
    :title="t('ProductsCard.title')"
    sectioned
    :primaryFooterAction="{
      content: t(
        'ProductsCard.populateProductsButton',
        { count: productsCount?.count },
      ),
      onAction: handleAddProduct,
      loading: isLoading,
    }"
  >
    <TextContainer spacing="loose">
      <p>{{ t('ProductsCard.description') }}</p>
      <Text as="h4" variant="headingMd">
        {{ t('ProductsCard.totalProductsHeading') }}
        <Text variant="bodyMd" as="p" fontWeight="semibold">
          {{ isProductsCountLoading ? "-" : productsCount?.count }}
        </Text>
      </Text>
    </TextContainer>
  </Card>
</template>

<script setup lang="ts">
import { Toast } from '@shopify/app-bridge/actions';
import { Card, TextContainer, Text } from '@ownego/polaris-vue';
import { useAppBridge } from 'src/composables/useAppBridge';
import { useProductStore } from 'src/stores/productStore';

const { t } = useTranslation();
const appBridge = useAppBridge();
const productStore = useProductStore();
const {
  isLoading, isProductsCountLoading, productsCount
} = storeToRefs(productStore);
const { setIsLoading, addProduct, refetchProductsCount } = productStore;
watch(productsCount, () => {
  console.log(productsCount.value);
})

const handleAddProduct = async () => {
  const response = await addProduct();

  let toast;
  if (response.ok) {
    await refetchProductsCount();
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