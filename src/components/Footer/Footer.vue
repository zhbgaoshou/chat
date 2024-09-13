<script setup lang="ts">
import FolderIcon from "@/assets/icons/folder.svg?component";
import SendIcon from "@/assets/icons/send.svg?component";

import { ref } from "vue";

const textarea = ref("");
</script>

<template>
  <form
    @submit="(e) => e.preventDefault()"
    class="p-3 relative flex items-center"
  >
    <textarea
      v-model="textarea"
      class="textarea textarea-bordered w-full resize-none !outline-0 rounded-full h-0"
      placeholder="Bio"
    >
    </textarea>

    <div class="absolute right-[20px] flex items-center">
      <FolderIcon class="w-50 h-50" />
      <button class="btn btn-circle btn-sm">
        <SendIcon />
      </button>
    </div>
  </form>
</template>
