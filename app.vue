<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "damir.cl",
  meta: [
    {
      name: "Sitio web personal de Damir Mandakovic",
      content: "CV, Fotos de montaña, Blog",
    },
  ],
});
useSeoMeta({
  title: "damir.cl",
  ogTitle: "damir.cl",
  description: "Sitio web personal de Damir Mandakovic",
  ogDescription: "Sitio web personal de Damir Mandakovic",
  ogImage: "https://ibb.co/pXZ0gz6",
  ogType: "website",
  ogUrl: "https://www.damir.cl",
  twitterCard: "summary_large_image",
  twitterUrl: "https://www.damir.cl",
  twitterTitle: "damir.cl",
  twitterDescription: "Sitio web personal de Damir Mandakovic",
});
</script>
