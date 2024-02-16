<template>
  <footer class="bg-slate-50 py-12">
    <div class="base-container flex justify-between flex-wrap w-full">
      <div class="footer-section w-full md:w-1/3 md:max-w-xs">
        <h3 class="font-semibold text-xl mb-4">
          {{ footerLeftData.title }}
        </h3>
        <div class="font-normal max-w-xs pb-6" v-html="footerLeftData.description" />
        <div class="flex flex-row space-x-4">
          <nuxt-link v-for="item in storeButtonsData" :key="item.ID" :to="item.link">
            <img :src="item.src.split('public')[1]" :alt="item.alt">
          </nuxt-link>
        </div>
      </div>
      <div class="footer-section w-full md:w-1/3 md:max-w-xs py-12 md:py-0 text-left md:text-center">
        <h3 class="font-semibold text-xl mb-4">
          Bizi takip edin
        </h3>
        <div class="flex flex-row justify-start lg:justify-center items-center space-x-4">
          <div v-for="item in footerSocialLinksData" :key="item.ID" class="flex justify-center items-center">
            <a class="social-link md:p-2 text-2xl" :href="item.link" target="_blank" rel="noopener noreferrer">
              <i :class="`ri-${item.name}-line`"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-section w-full md:w-1/3 md:max-w-xs md:flex md:flex-col md:items-end">
        <div>
          <h3 class="font-semibold text-xl mb-4 md:w-max">
            Blog Yazıları
          </h3>
          <ul class="sm:w-max space-y-2 text-slate-500">
            <li v-for="item in data" :key="item.ID">
              <nuxt-link :to="`/blog/${item.slug}`">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const footerLeft = await import(`../contentrain/footer-left/footer-left.json`)
const footerSocialLinks = await import(`../contentrain/footer-social-links/footer-social-links.json`)
const storeButtons = await import('../contentrain/storebuttons/storebuttons.json')
const storeButtonsData = storeButtons.default.sort((a, b) => a.index - b.index)
const footerLeftData = footerLeft.default[0]
const footerSocialLinksData = footerSocialLinks.default
const data = await queryContent("blog").find()
</script>

<style scoped></style>
