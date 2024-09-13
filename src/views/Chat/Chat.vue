<script setup lang="ts">
import Head from "@/components/Head/Head.vue";
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <Head />
    <div class="overflow-auto flex-1 px-4">
      <Message />
      <div class="chat chat-start">
        <div class="chat-bubble flex justify-center items-center ">
          <span class="loading loading-infinity loading-md"></span>
        </div>
        <div class="chat-footer opacity-50">正在寻找最佳方案...</div>
    </div>
    </div>
    <Footer />
  </div>
</template>
