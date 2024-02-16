<template>
  <div>
    <div class="base-container">
      <section class="home-hero app-section pb-36 flex lg:flex-row flex-col">
        <div class="content lg:max-w-lg p-0 md:pr-2 flex flex-col justify-center">
          <h1 class="text-5xl font-semibold mb-6">
            {{ heroData.title }}
          </h1>
          <p class="mb-8 text-xl">
            {{ heroData.description }}
          </p>
          <div class="flex flex-row space-x-4">
            <nuxt-link v-for="item in storeButtonsData" :key="item.ID" :to="item.link">
              <img :src="item.src.split('public')[1]" :alt="item.alt">
            </nuxt-link>
          </div>
        </div>
        <div class="media p-0 md:pl-2 flex rounded-2xl justify-center items-center">
          <div class="w-full xl:min-w-[650px] mx-auto h-auto rounded-2xl mt-12 md:mt-0">
            <img class="mx-auto" src="/img/1660162214661_home.jpg" alt="hero" />
          </div>
        </div>
      </section>
      <section ref="references" class="
          references
          grid grid-cols-2
          md:grid-cols-5
          gap-8
          md:gap-12
          lg:gap-16
        ">
        <p class="flex justify-center items-center text-center lg:text-left text-xl col-span-2 md:col-span-1">
          Referanslarımız
        </p>
        <div v-for="(logo, index) in referansData" :key="index" class="reference-logo-container flex justify-center"
          :class="index === referansData - 1 ? 'lg:justify-end' : ''
            ">
          <img :src="logo.src.split('public')[1]" :alt="logo.alt" class="reference-logo w-full h-auto" />
        </div>
      </section>
      <section class="features py-40">
        <div ref="featuresTitle" class="content max-w-2xl mx-auto text-center mb-16">
          <h2 class="font-semibold text-4xl mb-6">
            {{ secondData.title }}
          </h2>
          <p>
            {{ secondData.description }}
          </p>
        </div>
        <div ref="featuresCards" class="app-cards">
          <div v-for="(feature, index) in secondCardsData" :key="index" class="app-card p-6">
            <div class="icon mb-6 w-[40px] h-[40px] rounded-full bg-primary-100 flex justify-center items-center">
              <i v-if="index === 0" class="ri-account-circle-fill text-2xl text-primary-500"></i>
              <i v-if="index === 1" class="ri-vidicon-fill text-2xl text-primary-500"></i>
              <i v-if="index === 2" class="ri-chat-smile-2-fill text-2xl text-primary-500"></i>
            </div>
            <div class="content mb-8">
              <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
              <p>
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section ref="bigBanner" class="app-banner-full relative">
      <img class="relative z-10 hidden lg:block left-4" :src="fullBannerData.imagesrc.split('public')[1]"
        :alt="fullBannerData.imagealt" />
      <div class="text-white w-full lg:w-2/5 mb-8 lg:mb-0">
        <h3 class="mb-6 text-white text-4xl font-semibold">
          {{ fullBannerData.title }}
        </h3>
        <div class="prose text-base text-slate-200 pb-8" v-html="fullBannerData.description"></div>
        <div class="flex flex-row space-x-4">
          <nuxt-link v-for="item in storeButtonsData" :key="item.ID" :to="item.link">
            <img :src="item.src.split('public')[1]" :alt="item.alt">
          </nuxt-link>
        </div>
      </div>
    </section>
    <div class="base-container">
      <section class="studies">
        <div ref="studiesTitle" class="content max-w-2xl mx-auto text-center mb-10">
          <h2 class="font-semibold text-4xl mb-6">
            {{ blogHeroData.title }}
          </h2>
          <p>
            {{ blogHeroData.description }}
          </p>
        </div>
        <div ref="studiesCards" class="app-cards">
          <div v-for="(post, index) in data" :key="index" class="app-card p-6">
            <div class="image mb-4">
              <img class="w-full h-auto rounded-2xl" :src="post.imagesrc.split('public')[1]" :alt="post.imagealt" />
            </div>
            <div class="content mb-6">
              <h3 class="font-semibold text-lg">
                {{ post.title }}
              </h3>
            </div>
            <div class="button flex">
              <nuxt-link class="btn-primary-outline" :to="`/blog/${post.slug}`">
                Yazıyı Okuyun
                <i class="ri-arrow-right-up-line ml-3 align-middle" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="services pt-40">
        <div ref="quotesTitle" class="content max-w-2xl mx-auto text-center mb-10">
          <h2 class="font-semibold text-4xl mb-6">
            {{ goruslerHeroData.title }}
          </h2>
          <p>
            {{ goruslerHeroData.description }}
          </p>
        </div>
        <div ref="quotesCards" class="app-cards">
          <div v-for="(item, index) in goruslerCardsData" :key="index" class="app-card p-6">
            <div class="icon text-secondary-500">
              <i class="ri-double-quotes-l text-5xl" />
            </div>
            <div class="content mt-3">
              <h3 class="font-medium">
                {{ item.quote }}
              </h3>
            </div>
            <div class="mt-6">
              <p class="text-sm flex items-center">
                <span class="w-4 border-b border-2 border-primary mr-2" />
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div ref="indexBanner" class="pb-9">
        <AppBanner />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hero = await import('../contentrain/anasayfa-hero/anasayfa-hero.json')
const storeButtons = await import('../contentrain/storebuttons/storebuttons.json')
const referans = await import('../contentrain/referanslarimiz/referanslarimiz.json')
const second = await import('../contentrain/anasayfa-second/anasayfa-second.json')
const secondCards = await import('../contentrain/anasayfa-second-cards/anasayfa-second-cards.json')
const fullBanner = await import('../contentrain/fullbanner/fullbanner.json')
const blogHero = await import('../contentrain/anasayfa-blog-cards/anasayfa-blog-cards.json')
const goruslerHero = await import('../contentrain/gorusler-hero/gorusler-hero.json')
const goruslerCards = await import('../contentrain/gorusler-cards/gorusler-cards.json')
const data = await queryContent("blog").find()
const heroData = hero.default[0]
const storeButtonsData = storeButtons.default.sort((a, b) => a.index - b.index)
const referansData = referans.default.sort((a, b) => a.index - b.index)
const secondData = second.default[0]
const secondCardsData = secondCards.default.sort((a, b) => a.index - b.index)
const fullBannerData = fullBanner.default[0]
const blogHeroData = blogHero.default[0]
const goruslerHeroData = goruslerHero.default[0]
const goruslerCardsData = goruslerCards.default


const references = ref(null);
const featuresTitle = ref(null);
const featuresCards = ref(null);
const bigBanner = ref(null);
const studiesTitle = ref(null);
const studiesCards = ref(null);
const indexBanner = ref(null);
const quotesTitle = ref(null);
const quotesCards = ref(null);
// const referenceLogos = ref(null);

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
//     { threshold: 0.4 }
//   );
//   observer.observe(references.value);
//   observer.observe(featuresTitle.value);
//   observer.observe(featuresCards.value);
//   observer.observe(bigBanner.value);
//   observer.observe(studiesTitle.value);
//   observer.observe(studiesCards.value);
//   observer.observe(indexBanner.value);
//   observer.observe(quotesTitle.value);
//   observer.observe(quotesCards.value);
// });

useHead({
  title: "Visivi",
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style lang="postcss" scoped>
.app-banner-full {
  @apply w-full max-w-[1440px] mx-auto flex flex-col-reverse justify-between lg:flex-row p-8 lg:pt-20 lg:pr-20 lg:pl-36 lg:pb-0 mb-40;
  background: linear-gradient(313.96deg, #0D091E 52.31%, #6C4BF6 103.98%);
}

@media screen and (min-width: 1441px) {
  .app-banner-full {
    border-radius: 24px;
  }
}
</style>
