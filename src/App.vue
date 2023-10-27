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
</script>


<style scoped></style>