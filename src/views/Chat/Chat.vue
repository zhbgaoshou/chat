<script setup lang="ts">
import Head from "@/components/Head/Head.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <Head />
    <div class="overflow-auto flex-1">
      <div class="h-[9999px]">123</div>
    </div>
    <Footer />
  </div>
</template>
