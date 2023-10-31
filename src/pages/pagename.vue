<template>
  <Page>
    <Layout>
      <LayoutSection>
        <Card sectioned>
          <Text variant="headingMd" as="h2">
            {{ t('PageName.heading') }}
          </Text>
          <TextContainer>
            <p>{{ t('PageName.body') }}</p>
          </TextContainer>
        </Card>
        <Card sectioned>
          <Text variant="headingMd" as="h2">
            {{ t('PageName.heading') }}
          </Text>
          <TextContainer>
            <p>{{ t('PageName.body') }}</p>
          </TextContainer>
        </Card>
      </LayoutSection>
      <Layout.Section secondary>
        <Card sectioned>
          <Text variant="headingMd" as="h2">
            {{ t('PageName.heading') }}
          </Text>
          <TextContainer>
            <p>{{ t('PageName.body') }}</p>
          </TextContainer>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
</template>

<script setup>
import { Card, Page, Layout, LayoutSection, TextContainer, Text } from '@ownego/polaris-vue';

const { t } = useTranslation();
</script>