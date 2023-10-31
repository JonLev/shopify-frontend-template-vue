# Shopify VueJS Frontend App

This is a Shopify app built with VueJS inspired by [Shopify React template](https://github.com/Shopify/shopify-frontend-template-react) and [a vue template](https://github.com/Mini-Sylar/shopify-app-vue-template).
It takes also tools of a modern VueJS stack inspired from [Vitesse](https://github.com/antfu/vitesse):
- [Vue 3](https://v3.vuejs.org/) with composition API and `<script setup>`
- [ViteJS](https://vitejs.dev/) as a build and dev server tool
- [Vue Router](https://next.router.vuejs.org/) in association of [Unplugin Vue Router](https://github.com/posva/unplugin-vue-router) for routing with a `pages/` folder
- [Pinia](https://pinia.esm.dev/) for state management
- [Unplugin auto-import](https://github.com/unplugin/unplugin-auto-import) to import core components automatically
- [Vue i18next](https://github.com/i18next/i18next-vue) for internationalization (base on i18next convention as in the react template)
- [TypeScript](https://www.typescriptlang.org/) for type checking

It also add necessary tools for Shopify app development:
- Composables for authenticated Shopify API call and App Bridge set-up
- [Polaris Vue](https://ownego.github.io/polaris-vue/?path=/story/get-started--page) a VueJS implementation of Shopify Polaris design system (not complete but is enough for a good start)

## Shopify Developer resources

- [Introduction to Shopify apps](https://shopify.dev/apps/getting-started)
  - [App authentication](https://shopify.dev/apps/auth)
- [Shopify CLI command reference](https://shopify.dev/apps/tools/cli/app)
- [Shopify API Library documentation](https://github.com/Shopify/shopify-node-api/tree/main/docs)

