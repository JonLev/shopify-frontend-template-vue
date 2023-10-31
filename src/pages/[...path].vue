<template>
  <Page>
      <Card>
        <CardSection>
          <EmptyState :heading="t('NotFound.heading')" :image="notFoundImage">
            <p>{{ t('NotFound.description') }}</p>
          </EmptyState>
        </CardSection>
      </Card>
    </Page>
</template>

<script setup lang="ts">
import {
  Page,
  Card,
  CardSection,
  EmptyState,
} from '@ownego/polaris-vue';
import notFoundImage from 'src/assets/empty-state.svg';

const { t } = useTranslation();
</script>