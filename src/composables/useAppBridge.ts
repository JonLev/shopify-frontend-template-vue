import { createApp } from '@shopify/app-bridge';

const host = new URLSearchParams(location.search).get('host') || window.__SHOPIFY_DEV_HOST
window.__SHOPIFY_DEV_HOST = host

export const useAppBridge = createSharedComposable(() => {
  const appBridge = createApp({
    apiKey: process.env.SHOPIFY_API_KEY as string,
    host: host as string,
    forceRedirect: true
  });
  return appBridge;
});
