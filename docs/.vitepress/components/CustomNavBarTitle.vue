<script setup lang="ts">
import { useData } from 'vitepress';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import { useSidebar } from 'vitepress/theme';
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs';
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'

const { site, theme } = useData()
const { hasSidebar } = useSidebar()
const { currentLang } = useLangs()

</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="theme.logoLink ?? normalizeLink(currentLang.link)">
      <slot name="nav-bar-title-before" />
      <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{ site.title }}</template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
@font-face{
  font-family: "Pacific Northwest Letters W01";
  src: url("fonts/e0870aa7286662dd08f498a39e6737de.eot");
  src: url("fonts/e0870aa7286662dd08f498a39e6737de.eot?#iefix")format("embedded-opentype"),
      url("fonts/e0870aa7286662dd08f498a39e6737de.woff")format("woff"),
      url("fonts/e0870aa7286662dd08f498a39e6737de.woff2")format("woff2"),
      url("fonts/e0870aa7286662dd08f498a39e6737de.ttf")format("truetype"),
      url("fonts/e0870aa7286662dd08f498a39e6737de.svg#Pacific Northwest Letters W01")format("svg");
  font-weight:normal;
  font-style:normal;
  font-display:swap;
}

.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 36px;
  font-weight: 600;
  font-family: "Pacific Northwest Letters W01";
  text-transform: uppercase;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: var(--vp-nav-logo-height);
}
</style>
