<template>
  <section class="app-section" :class="[
    reverse ? 'flex-row-reverse' : '',
    contentLarge ? '' : 'items-center',
  ]">
    <div :class="contentLarge ? 'media-small' : 'media'">
      <img class="h-auto w-full rounded-2xl mb-9 lg:mb-0" :src="section.imagesrc.split('public')[1]"
        :alt="section.imagealt" />
    </div>
    <div :class="contentLarge ? 'content-large' : 'content'">
      <h1 class="text-4xl font-semibold mb-6">
        {{ section.title }}
      </h1>
      <span class="section-description text-secondary-500 text-base" v-html="section.description"></span>
      <nuxt-link :to="`/blog/${section.slug}`" class="btn-primary-lighter flex items-center mt-8 w-max">
        Learn more <i class="ri-arrow-right-line" /></nuxt-link>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    default: () => { },
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  contentLarge: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss">
.section-description ul {
  @apply list-inside list-disc text-inherit space-y-2;
  /* list-style: initial!important; */
}
</style>
