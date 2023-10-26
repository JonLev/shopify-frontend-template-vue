import { createApp } from '@shopify/app-bridge';
import type { App } from 'vue';

const host = new URLSearchParams(location.search).get('host') || window.__SHOPIFY_DEV_HOST

window.__SHOPIFY_DEV_HOST = host

export const shopifyAppBridgePlugin = {
  install: (app: App) => {
    console.log(process.env.SHOPIFY_API_KEY, host)
    const appBridge = createApp({
      apiKey: process.env.SHOPIFY_API_KEY as string,
      host: host as string,
      forceRedirect: true
    })

    app.config.globalProperties.$appBridge = appBridge
    app.provide('useAppBridge', appBridge)
  }
}