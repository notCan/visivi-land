<template>
  <div>
    <div class="base-container">
      <section class="home-hero app-section">
        <div class="content-contact lg:max-w-lg p-0 md:pr-2 lg:mt-14">
          <h1 class="text-6xl font-semibold mb-6">
            {{ contactData.title }}
          </h1>
          <p class="mb-8 text-xl">
            {{ contactData.description }}
          </p>
        </div>
        <div class="media lg:mt-14">
          <div class="bg-primary-100 rounded-2xl p-6">
            <form action="submit" class="space-y-4">
              <div class="space-y-2">
                <label class="text-sm">İsim Soyisim<span class='text-red-600'>*</span></label>
                <LuiInput block rounded v-model="form.name" required placeholder="John Dove" />
              </div>
              <div class="space-y-2">
                <label class="text-sm">Email<span class='text-red-600'>*</span></label>
                <LuiInput block rounded v-model="form.email" type="email" required placeholder="johndove@outlook.com" />
              </div>
              <div class="space-y-2">
                <label class="text-sm">Mesaj<span class='text-red-600'>*</span></label>
                <LuiTextarea block rounded v-model="form.message" required placeholder="Mesaj" />
              </div>
              <div>
                <LuiButton block rounded>
                  Gönder
                </LuiButton>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <AppBanner></AppBanner>
      </section>
    </div>
  </div>
</template>
<script setup>
import { LuiInput, LuiButton, LuiTextarea } from '@lui-ui/lui-vue';
const contact = await import('../contentrain/contact-hero/contact-hero.json')
const contactData = contact.default[0]
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

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
//   observer.observe(contactBanner.value);
// });

useHead({
  title: 'Iletisim',
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<style lang="postcss" scoped>
.app-banner {
  @apply w-full bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-8 lg:p-20 flex flex-wrap items-center justify-between max-w-5xl mx-auto relative mb-40;
}
</style>
