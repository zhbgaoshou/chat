<script setup>
import DrawerSide from "./DrawerSide.vue";

</script>
<template>
    <div class="drawer h-full md:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-0">
      <!-- Page content here -->
      <router-view />
    </div>
    <div class="drawer-side z-10">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <DrawerSide />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>