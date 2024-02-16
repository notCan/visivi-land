<template>
  <div>
    <div class="base-container">
      <AppHero class="mb-32" :title="blogHeroData.title" :description="blogHeroData.description" :media="blogHeroData" />
    </div>
    <div class="small-container">
      <div ref="casesSection">
        <AppSection v-for="(section, index) in data" :key="index" class="mb-40" :section="section" content-large />
      </div>
    </div>
    <div ref="servicesBanner">
      <AppBanner />
    </div>
  </div>
</template>

<script setup>
const blogHero = await import('../contentrain/anasayfa-blog-cards/anasayfa-blog-cards.json')
const data = await queryContent("blog").find()
const blogHeroData = blogHero.default[0]

const casesSection = ref(null);

// onMounted(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const intersecting = entry.isIntersecting;
//         entry.target.classList.add("wordify-scroll-animation");
//         if (intersecting) {
//           entry.target.classList.add("active");
//         } else {
//           // entry.target.classList.remove("active");
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );
//   observer.observe(casesSection.value);
// });

useHead({
  title: "Blog",
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<style>
.app-banner {
  @apply w-full bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-8 lg:p-20 flex flex-wrap items-center justify-between max-w-5xl mx-auto relative mb-40;
}
</style>