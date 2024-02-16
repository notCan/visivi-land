<template>
  <header>
    <div v-if="!mobileNav" class="header-desktop base-container py-4 mb-6 md:mb-12">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img class="w-24 md:w-36 h-auto text-2xl" :src="logoData.logosrc.split('public')[1]" :alt="logoData.logoalt">
          </nuxt-link>
        </div>
        <nav class="hidden md:flex items-center">
          <div v-for="nav in navigasyonLinksData" :key="nav.ID">
            <nuxt-link :to="nav.link" class="nav-link px-3 py-1" exact-active-class="text-primary">
              {{ nav.name }}
            </nuxt-link>
          </div>
          <div v-for="button in navigasyonButtonsData" :key="button.ID">
            <nuxt-link class="btn-primary ml-3" :to="button.link">
              {{ button.name }}
            </nuxt-link>
          </div>

        </nav>
        <button class="block md:hidden btn-primary-outline" @click="mobileNav = true">
          <i class="ri-menu-line" />
        </button>
      </div>
    </div>
    <div v-if="mobileNav" class="header-mobile flex flex-col fixed md:hidden w-screen h-screen bg-white z-10 p-4">
      <div class="flex justify-between w-full">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img class="w-24 md:w-36 h-auto text-2xl" :src="logoData.logosrc.split('public')[1]" :alt="logoData.logoalt">
          </nuxt-link>
        </div>
        <button class="block md:hidden app-link" @click="mobileNav = false">
          <i class="ri-close-line text-2xl" />
        </button>
      </div>
      <nav class="flex flex-col mt-4">
        <div v-for="nav in navigasyonLinksData" :key="nav">
          <nuxt-link :to="nav.link" class="nav-link block p-3 text-lg" exact-active-class="text-primary">
            {{ nav.name }}
          </nuxt-link>
        </div>
        <div v-for="button in navigasyonButtonsData" :key="nav">
          <nuxt-link class="nav-link block p-3 text-lg" exact-active-class="text-primary" :to="button.link">
            {{ button.name }}
          </nuxt-link>
        </div>

      </nav>
    </div>
  </header>
</template>

<script setup>
const logo = await import(`../contentrain/logo/logo.json`)
const logoData = logo.default[0]
const navigasyon = await import(`../contentrain/navigasyon/navigasyon.json`)
const navigasyonLinksData = navigasyon.default.filter((item) => (item.isbutton === false)).sort((a, b) => a.index - b.index)
const navigasyonButtonsData = navigasyon.default.filter((item) => (item.isbutton === true)).sort((a, b) => a.index - b.index)

const route = useRoute()
const mobileNav = ref(false)
watch(
  () => mobileNav.value,
  (val) => {
    if (val) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)
watch(
  () => route.path,
  (val) => {
    if (val) {
      mobileNav.value = false
    }
  }
)
</script>
