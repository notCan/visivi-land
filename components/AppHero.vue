<template>
  <section class="app-hero" :style="cssVars">
    <div class="hero-background-image" />
    <div class="flex justify-between flex-wrap relative">
      <div class="content w-full lg:w-1/2">
        <h3 v-if="subtitle" class="font-medium text-2xl text-primary-300 mb-4">
          {{ subtitle }}
        </h3>
        <h1 v-if="title" class="font-semibold text-5xl text-white mb-6">
          {{ title }}
        </h1>
        <p v-if="description" class="text-secondary-50 text-lg">
          {{ description }}
        </p>
      </div>
      <div class="
          media
          flex
          justify-start
          lg:justify-end
          items-end
          w-full
          lg:w-1/2
          pt-12
        ">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img class="w-24 md:w-36 h-auto text-2xl" :src="logoData.logosrc.split('public')[1]" :alt="logoData.logoalt">
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logo = await import(`../contentrain/logo/logo.json`)
const logoData = logo.default[0]
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  subtitle: {
    default: "",
    type: String,
  },
  description: {
    default: "",
    type: String,
  },
  media: {
    type: Object,
    default: () => { },
  },
  // logoUrl: {
  //   default: "/img/logo.svg",
  //   type: String,
  // },
});
const cssVars = computed(() => {
  return {
    "--background-url": `url(${props.media.imagesrc.split("public")[1]})`,
  };
});
</script>

<style lang="postcss" scoped>
.app-hero {
  @apply bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl lg:min-h-[600px] flex items-center p-8 lg:p-24 relative;
}

.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-10;
  background-image: var(--background-url);
}
</style>
