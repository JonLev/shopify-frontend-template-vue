<template>
  <AppProvider>
    <Suspense>
      <RouterView />
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </AppProvider>
</template>

<script setup>
import { AppProvider, Loading } from "@ownego/polaris-vue";
import { NavigationMenu, AppLink } from "@shopify/app-bridge/actions";

import { useAppBridge } from "src/composables/useAppBridge";

const { t } = useTranslation();
const appBridge = useAppBridge();
const pagename = AppLink.create(appBridge, {
  label: t('NavigationMenu.pageName'),
  destination: '/pagename',
});
NavigationMenu.create(appBridge, { items: [pagename] });
</script>


<style scoped></style>