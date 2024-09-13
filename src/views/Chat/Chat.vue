<script setup lang="ts">
import Head from "@/components/Head/Head.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col h-full justify-between">

    <Head />
    <div class="overflow-auto flex-1 px-4">
      <div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble">I hate you!</div>
        <div class="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div class="chat-bubble">Not leave it in Darkness</div>
      </div>
    </div>
    <Footer />
  </div>
</template>
