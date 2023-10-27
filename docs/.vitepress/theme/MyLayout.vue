<template>
  <Layout>
    <!-- <template #home-hero-before>
      <div class="w-5/12 mx-auto">
        <a-alert>This is an info alert.</a-alert>
      </div>
    </template> -->
    <template #home-hero-image>
      <a-image width="250px" src="../../public/img/kbn/2023/logo.gif"></a-image>
    </template>
    <template #doc-footer-before>
      <!-- <ClientOnly>
        <Copyright v-if="(frontmatter?.aside ?? true) && (frontmatter?.showArticleMetadata ?? true) && !(frontmatter.authorLink)" :key="md5(page.relativePath)" />
      </ClientOnly> -->
    </template>
    <template #doc-after>
      <!-- <Comment v-if="(theme.commentConfig?.showComment ?? true) && (frontmatter?.showComment ?? true)" :commentConfig="theme.commentConfig" :key="md5(page.relativePath)" /> -->
    </template>
    <template #layout-bottom>
      <Footer v-if="!hasSidebar && (theme.footerConfig?.showFooter ?? true) && (frontmatter?.showFooter ?? true)" />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import DefaultTheme from 'vitepress/theme';
  import { useData } from 'vitepress';
  import md5 from 'blueimp-md5';
  import Copyright from './components/layout/Copyright.vue';
  import Footer from './components/layout/Footer.vue';

  const { Layout } = DefaultTheme;
  const { page, theme, frontmatter } = useData();
  const hasSidebar = computed(() => {
    return (
      frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
    )
  });
</script>

<style scoped></style>