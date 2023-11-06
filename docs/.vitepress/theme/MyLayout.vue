<template>
  <Layout>
    <template #home-hero-info>
    </template>
    <template #home-hero-image>
      <a-image class="mt-10 lg:mt-1" width="250px" :src="kbn"></a-image>
    </template>
    <template #home-hero-after>
      <center>
        新网站正在迁移中，预计12月底全部迁移结束。在此之前，依然可以正常访问旧版网站。<br />

        <a-space class="my-5">
          <a-button type="primary" href="./todo/TODO"
            >新版迁移进度&DeadLine</a-button
          >
          <a-button
            type="primary"
            href="http://fwxy.swdwiki.com/old"
            target="_blank"
            >旧版枫舞轩辕入口</a-button
          >
        </a-space>
      </center>
      <new-new-list />
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
      <Footer
        v-if="
          !hasSidebar &&
          (theme.footerConfig?.showFooter ?? true) &&
          (frontmatter?.showFooter ?? true)
        "
      />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import md5 from "blueimp-md5";
import Copyright from "./components/layout/Copyright.vue";
import Footer from "./components/layout/Footer.vue";
import kbn from "./img/kbn/2023/logo.gif";

const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();
const hasSidebar = computed(() => {
  return (
    frontmatter.value.aside !== false && frontmatter.value.layout !== "home"
  );
});
</script>

<style scoped></style>