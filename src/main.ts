import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
import { router } from './modules/router';
import { shopifyAppBridgePlugin } from './modules/appBridge.js';
import { initI18n } from "./modules/i18n";

import './assets/main.css';
import '@ownego/polaris-vue/dist/style.css';

const app = createApp(App);
initI18n().then(() => {
  app.use(I18NextVue, { i18next });
  app.use(shopifyAppBridgePlugin);
  app.use(createPinia());
  app.use(VueQueryPlugin);
  app.use(router);

  app.mount('#app');
});