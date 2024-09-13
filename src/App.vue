<script setup lang="ts"></script>

<template>
  <div class="drawer h-full md:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-0">
      <!-- Page content here -->
      <router-view />
    </div>
    <div class="drawer-side z-10">
      <label
        for="drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 min-h-full p-4">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
