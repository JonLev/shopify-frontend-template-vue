<template>
  <Page v-if="showWarning" narrowWidth>
      <Layout>
        <LayoutSection>
          <div :style="{ marginTop: '100px' }">
            <Banner title="Redirecting outside of Shopify" status="warning">
              Apps can only use /exitiframe to reach Shopify or the app itself.
            </Banner>
          </div>
        </LayoutSection>
      </Layout>
    </Page>
  <Loading/>
</template>

<script setup>
import { Loading } from '@ownego/polaris-vue';
import { Redirect } from "@shopify/app-bridge/actions";
import { ueAppBridge } from 'src/composables/useAppBridge';

const appBridge = ueAppBridge();
const route = useRoute();
const router = useRouter();

const redirectUri = route.query.get("redirectUri");
const url = new URL(decodeURIComponent(redirectUri));

const showWarning = ref(false);
if (
  [location.hostname, "admin.shopify.com"].includes(url.hostname) ||
  url.hostname.endsWith(".myshopify.com")
) {
  const redirect = Redirect.create(appBridge);
  redirect.dispatch(
    Redirect.Action.REMOTE,
    decodeURIComponent(redirectUri)
  );
} else {
  showWarning.value = true;
}
</script>