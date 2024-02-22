<template>
  <div>
    <h1>Welcome to our App!</h1>
    <p>If you're on a mobile device, click the button below to download our app.</p>
    
    <button @click="redirectToStore">Download App</button>
  </div>
</template>

<script setup lang="ts">
function redirectToStore() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // Redirect to Google Play Store
    window.location.href = 'https://play.google.com/store/apps/details?id=com.cagri.cagri_app&hl=tr&gl=US';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Redirect to Apple App Store
    window.location.href = 'https://apps.apple.com/td/app/voco/id1576261314';
  } else {
    // Redirect to a default page if the device is not recognized
    window.location.href = 'https://vocoapp.com';
  }
}

</script>
