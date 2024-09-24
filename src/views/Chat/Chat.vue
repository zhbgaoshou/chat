<script setup lang="ts">
import Footer from "@/components/Footer/Footer.vue";
import Message from "./Message.vue";
</script>

<template>
  <div class="flex flex-col min-h-0 flex-1 justify-between">
    <div class="flex-1 min-h-0 flex">
      <div class="flex-1 overflow-auto">
        <Message />
        <!-- 生成中 -->
        <div class="chat chat-start">
          <div class="chat-bubble flex justify-center items-center">
            <span class="loading loading-dots loading-md"></span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
