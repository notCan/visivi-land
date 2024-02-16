<template>
  <section class="app-banner">
    <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
      <h2 class="text-white text-4xl font-semibold mb-4">
        {{ bannerData.title }}
      </h2>
      <p class="text-white text-lg">{{ bannerData.description }}</p>
    </div>
    <div class="flex flex-col space-y-4 z-10">
      <nuxt-link v-for="item in storeButtonsData" :key="item.ID" :to="item.link" class="w-36">
        <img :src="item.src.split('public')[1]" :alt="item.alt">
      </nuxt-link>
    </div>
    <img class="hidden lg:block absolute bottom-0 h-full" :class="titleCharCount >= 24 ? 'right-[-80px]' : 'right-0'"
      src="/img/banner_lines.svg" alt="lines" />
  </section>
</template>
<script setup lang="ts">
const banner = await import('../contentrain/banner/banner.json')
const storeButtons = await import('../contentrain/storebuttons/storebuttons.json')
const bannerData = banner.default[0]
const storeButtonsData = storeButtons.default.sort((a, b) => a.index - b.index)
const props = defineProps({
  title: {
    default: "Level up your content",
    type: String,
  },
  description: {
    default: "Ready to talk your content strategy",
    type: String,
  },
  button: {
    default: () => { },
    type: Object,
  },
});
const titleCharCount = computed(() => {
  return bannerData.title.length;
});
</script>
<style lang="postcss" scoped>
.app-banner {
  @apply w-full max-w-5xl bg-gradient-to-br from-primary-700 via-primary-950 to-black rounded-3xl p-8 lg:p-20 flex flex-wrap items-center justify-between mx-auto my-40 relative;
}
</style>
