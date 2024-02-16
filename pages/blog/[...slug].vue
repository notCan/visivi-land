<template>
  <div class="base-container">
    <ContentDoc v-slot="{ doc }">
      <section class="app-banner-big mb-32 flex flex-col" :style="cssVars">
        <div class="hero-background-image" />
        <div class="flex items-center justify-between flex-wrap relative">
          <div class="content w-full lg:w-1/2">
            <h1 class="font-semibold text-5xl text-white mb-6 lg:mb-0">
              {{ doc.title }}
            </h1>
          </div>
          <div class="media mx-auto lg:mx-0 hidden lg:block">
            <img :src="doc.imagesrc.split('public')[1]" :alt="doc.imagealt" />
          </div>
        </div>
        <div class="w-full flex justify-center mt-auto">
          <div class="flex flex-col items-center text-white z-20">
            <p class="text-white mb-4">Yazıyı oku</p>
            <button class="text-2xl" @click="scrollArticle">
              <i class="ri-mouse-fill"></i>
            </button>
          </div>
        </div>
      </section>
      <article class="prose mx-auto" ref="article">
        <ContentDoc />
      </article>
      <div ref="casesSlugBanner">
        <AppBanner />
      </div>
    </ContentDoc>
  </div>
</template>

<script setup>
definePageMeta({
  // titleTemplate: () => `${doc.title}`,
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    lang: "en",
  },
});
const route = useRoute()
const { data } = await useAsyncData(`${route.path}`, () => queryContent('blog').where({ slug: { $eq: slug } }).findOne())

const backgroundUrl =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const cssVars = computed(() => {
  return {
    "--background-url": `url(${backgroundUrl})`,
  };
});

const article = ref(null);
const casesSlugBanner = ref(null);

function scrollArticle() {
  article.value.scrollIntoView({ behavior: "smooth" });
}

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
//   observer.observe(article.value);
//   observer.observe(casesSlugBanner.value);
// });
</script>

<style lang="postcss">
.app-banner-big {
  @apply bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl lg:min-h-[600px] p-8 lg:px-24 lg:pb-12 lg:pt-40 relative;
}

.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-5;
  background-image: var(--background-url);
}
</style>
