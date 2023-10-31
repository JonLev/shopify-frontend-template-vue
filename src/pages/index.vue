<template>
  <Page>
    <Layout>
      <LayoutSection>
        <Card sectioned>
          <Stack
            :wrap="false"
            spacing="extraTight"
            distribution="trailing"
            alignment="center"
          >
            <StackItem fill>
              <TextContainer spacing="loose">
                <Text as="h2" variant="headingMd">
                  {{ t("HomePage.heading") }}
                </Text>
                <p>
                  {{ t('HomePage.yourAppIsReadyToExplore') }}
                </p>
                <p>{{ t("HomePage.startPopulatingYourApp") }}</p>
              </TextContainer>
            </StackItem>
            <StackItem>
              <div :style="{ padding: '0 20px' }">
                <Image
                  :source="trophyImage"
                  :alt="t('HomePage.trophyAltText')"
                  :width="120"
                />
              </div>
            </StackItem>
          </Stack>
        </Card>
      </LayoutSection>
      <!-- <LayoutSection>
        <ProductsCard />
      </LayoutSection> -->
    </Layout>
  </Page>
</template>

<script setup lang="ts">
import {
  Card,
  Page,
  Layout,
  LayoutSection,
  TextContainer,
  Image,
  Stack,
  StackItem,
  Text,
} from '@ownego/polaris-vue';
import trophyImage from 'src/assets/home-trophy.png';

const { t } = useTranslation();
</script>

<style scoped>

</style>